// Google Apps Script to save form submissions to Google Sheets
// Deploy this as a Web App in Google Apps Script.
// 
// Instructions:
// 1. Open Google Sheets.
// 2. Click Extensions > Apps Script.
// 3. Delete any code in the editor and paste this code.
// 4. Click Deploy > New deployment.
// 5. Select type: "Web app".
// 6. Set Description: "Tag My Taxi Webhook"
// 7. Set Execute as: "Me"
// 8. Set Who has access: "Anyone"
// 9. Click Deploy.
// 10. Copy the Web App URL and paste it as GOOGLE_SHEET_WEBHOOK_URL in your .env.local file.

const SPREADSHEET_ID = '1i8Pn6FjflfEBkJfYPoDz_eDtFal6FucWRu439GopFMU';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType || 'contact';
    const sheetName = formType === 'quote' ? 'Quotes' : 'Inquiries';
    
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet and headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (formType === 'quote') {
        sheet.appendRow([
          'Submitted At', 
          'Name', 
          'Email', 
          'Phone', 
          'Company', 
          'Country', 
          'Number of Cars'
        ]);
      } else {
        sheet.appendRow([
          'Submitted At', 
          'First Name', 
          'Last Name', 
          'Email', 
          'Fleet Size', 
          'Message'
        ]);
      }
      
      // Format headers: Bold, freeze row 1
      sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    
    // Append the row
    if (formType === 'quote') {
      const fullPhone = [data.countryCode, data.phone].filter(Boolean).join(' ');
      sheet.appendRow([
        data.submittedAt || new Date().toISOString(),
        data.name || '',
        data.email || '',
        fullPhone,
        data.company || '',
        data.country || '',
        data.numberOfCars || ''
      ]);
    } else {
      sheet.appendRow([
        data.submittedAt || new Date().toISOString(),
        data.firstName || '',
        data.lastName || '',
        data.email || '',
        data.fleetSize || '',
        data.message || ''
      ]);
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error details: ', error);
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple test function to run in Apps Script console to verify sheet access
function testConnection() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    Logger.log('Successfully connected to spreadsheet: ' + ss.getName());
  } catch (error) {
    Logger.log('Connection failed: ' + error.toString());
  }
}
