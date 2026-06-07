"use server"
import nodemailer from 'nodemailer'

export type FormSubmissionData = {
  formType: 'quote' | 'contact'
  name?: string
  firstName?: string
  lastName?: string
  email: string
  countryCode?: string
  phone?: string
  company?: string
  country?: string
  numberOfCars?: string
  fleetSize?: string
  message?: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

async function sendEmailNotification(data: FormSubmissionData) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return;
  
  const isQuote = data.formType === 'quote'
  const subject = isQuote ? 'Inquiry Mail From Request A Quote' : 'Inquiry Mail From Contact Us'
  const name = isQuote ? data.name : `${data.firstName || ''} ${data.lastName || ''}`.trim()
  
  const htmlBody = `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="background: #f5f5f5; font-family: Roboto, sans-serif; line-height: 1.4; font-size: 16px; color: #000;">
      <tbody>
        <tr><td height="50"></td></tr>
        <tr>
          <td>
            <table border="0" cellspacing="0" cellpadding="0" align="center" width="650" style="background: #fff; text-align: center; box-shadow: 0px 0px 30px 0px rgb(19 26 54 / 17%); border-radius: 8px;">
              <tbody>
                <tr><td height="20"></td></tr>
                <tr>
                  <td height="65" align="center">
                    <img src="https://www.tagmytaxi.com/images/logo.png" style="width: 200px; height: 38px;" />
                  </td>
                </tr>
                <tr><td height="20"></td></tr>
                <tr>
                  <td>
                    <table border="0" cellspacing="0" cellpadding="0" align="center" width="530" style="text-align: center;">
                      <tbody>
                        <tr><td height="10"></td></tr>
                        <tr>
                          <td style="background:#dd2914;">
                            <p style="margin: 10px 0; color:#fff; font-size: 20px;">${subject}</p>
                          </td>
                        </tr>
                        <tr><td height="10"></td></tr>
                        <tr>
                          <td>
                            <table border="0" cellspacing="0" cellpadding="10" width="530" style="text-align: left; border: 1px solid #a9a9a9;">
                              <tbody>
                                <tr style="background:#fff;"><td><b>Name</b></td><td>${name || 'N/A'}</td></tr>
                                <tr style="background:#fff;"><td><b>Email</b></td><td>${data.email || 'N/A'}</td></tr>
                                ${data.phone ? `<tr style="background:#fff;"><td><b>Phone</b></td><td>${data.countryCode || ''} ${data.phone}</td></tr>` : ''}
                                ${data.company ? `<tr style="background:#fff;"><td><b>Company</b></td><td>${data.company}</td></tr>` : ''}
                                ${data.country ? `<tr style="background:#fff;"><td><b>Country</b></td><td>${data.country}</td></tr>` : ''}
                                ${data.numberOfCars ? `<tr style="background:#fff;"><td><b>No of Cars</b></td><td>${data.numberOfCars}</td></tr>` : ''}
                                ${data.fleetSize ? `<tr style="background:#fff;"><td><b>Fleet Size</b></td><td>${data.fleetSize}</td></tr>` : ''}
                                ${data.message ? `<tr style="background:#fff;"><td><b>Message</b></td><td>${data.message}</td></tr>` : ''}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr><td height="10"></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr><td height="50"></td></tr>
      </tbody>
    </table>
  `

  await transporter.sendMail({
    from: `"TagMyTaxi Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    subject: `TagmyTaxi || ${subject}`,
    html: htmlBody,
  })
}

export async function submitToGoogleSheets(data: FormSubmissionData) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn("GOOGLE_SHEET_WEBHOOK_URL is not configured. Form submission logged to console only.")
    console.log("Mock Sheet Submission Data:", data)
    
    // Also test email sending locally if configured
    await sendEmailNotification(data).catch(console.error)
    
    return { 
      success: true, 
      mocked: true,
      message: "Form accepted (running in simulation mode since GOOGLE_SHEET_WEBHOOK_URL is not set)." 
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        countryCode: data.countryCode ? `'${data.countryCode}` : data.countryCode,
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Google Sheet Webhook returned status ${response.status}`)
    }

    const responseData = await response.json()
    if (responseData.status === 'error') {
      throw new Error(responseData.message || "Failed to save submission to Google Sheets.")
    }

    // Try to send email, don't block the request if it fails
    await sendEmailNotification(data).catch((err) => {
      console.error("Error sending email notification:", err)
    })

    return { success: true }
  } catch (error: any) {
    console.error("Error submitting form to Google Sheets:", error)
    return { 
      success: false, 
      error: error.message || "Something went wrong while submitting the form. Please try again." 
    }
  }
}
