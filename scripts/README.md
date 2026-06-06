# Google Sheets Integration Guide

This directory contains the Google Apps Script to save form submissions from the **Tag My Taxi** website directly into your Google Spreadsheet.

## Spreadsheet Details
- **Sheet ID**: `1i8Pn6FjflfEBkJfYPoDz_eDtFal6FucWRu439GopFMU`

---

## Step-by-Step Setup Instructions

### 1. Open Google Apps Script
1. Go to your Google Sheet: [https://docs.google.com/spreadsheets/d/1i8Pn6FjflfEBkJfYPoDz_eDtFal6FucWRu439GopFMU](https://docs.google.com/spreadsheets/d/1i8Pn6FjflfEBkJfYPoDz_eDtFal6FucWRu439GopFMU)
2. In the top menu bar, click on **Extensions** > **Apps Script**.

### 2. Copy the Code
1. Open the [google-sheets-script.gs](file:///c:/Users/deepi/OneDrive/Documents/GitHub/tag-my-taxi/scripts/google-sheets-script.gs) file in this repository.
2. Copy its entire content.
3. In the Google Apps Script editor, delete any existing default code (`function myFunction() { ... }`).
4. Paste the copied code into the editor.

### 3. Deploy as a Web App
1. Click the blue **Deploy** button at the top right of the Apps Script editor, and select **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill in the deployment details:
   - **Description**: `Tag My Taxi Form Webhook`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` (This is critical so the website backend can send submissions without OAuth popups).
4. Click **Deploy**.
5. Google will ask you to **Authorize Access**. Click "Authorize Access", choose your Google account, click "Advanced" (if a warning appears), and click "Go to Untitled project (unsafe)" / "Allow".

### 4. Configure Next.js
1. Once deployed, copy the **Web app URL** from the deployment confirmation dialog. It will look like this:
   `https://script.google.com/macros/s/AKfycb.../exec`
2. Open your local `.env.local` file.
3. Paste the URL as the value for `GOOGLE_SHEET_WEBHOOK_URL`:
   ```env
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
4. Save the `.env.local` file and restart your local Next.js dev server.

---

## Sheet Structure Created Automatically
The script will automatically create the following tabs in your Google Sheet on the first submission:
1. **Quotes**: Stores submissions from the Request Quote form (Name, Email, Phone, Company, Country, Number of Cars).
2. **Inquiries**: Stores submissions from the General Contact form (First Name, Last Name, Email, Fleet Size, Message).
