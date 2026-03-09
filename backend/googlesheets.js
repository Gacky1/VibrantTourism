// Google Sheets as Database
// 1. Create a Google Sheet
// 2. Extensions > Apps Script
// 3. Paste the code below and deploy as web app

/*
GOOGLE APPS SCRIPT CODE (paste in Apps Script):

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  const data = sheet.getRange('A1').getValue();
  return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  sheet.getRange('A1').setValue(e.postData.contents);
  return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
}
*/

const GOOGLE_SHEET_URL = 'YOUR_DEPLOYED_WEB_APP_URL';

export const googleSheetsDB = {
  async get() {
    const response = await fetch(GOOGLE_SHEET_URL);
    return response.json();
  },

  async update(data) {
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
