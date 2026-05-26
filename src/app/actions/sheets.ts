"use server"

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

export async function submitToGoogleSheets(data: FormSubmissionData) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn("GOOGLE_SHEET_WEBHOOK_URL is not configured. Form submission logged to console only.")
    console.log("Mock Sheet Submission Data:", data)
    // To allow testing without a webhook URL instantly, let's pretend it succeeded in dev if URL is not configured
    // but log a warning.
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

    return { success: true }
  } catch (error: any) {
    console.error("Error submitting form to Google Sheets:", error)
    return { 
      success: false, 
      error: error.message || "Something went wrong while submitting the form. Please try again." 
    }
  }
}
