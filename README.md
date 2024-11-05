# GenerateForSpreadsheets

## Overview
The **GenerateForSpreadsheets** Google Apps Script automates document creation using Google Docs templates and data from Google Sheets. This script replaces placeholders in a template with values from a Google Sheets file, then saves the document in a specific Google Drive folder.

## Features
- Populates Google Docs templates with data from Google Sheets.
- Saves generated documents to a specified Google Drive folder.
- Supports multiple templates that are chosen through checkboxes in Google Sheets.

## Requirements
- **Google Sheets**: Serves as the data source.
- **Google Docs**: Serves as the document template.
- **Google Drive**: Stores the generated documents.

## How It Works
1. **Input Data**: Enter data into the Google Sheets file, selecting templates using checkboxes.
2. **Template Setup**: Placeholders (e.g., `<<Placeholder>>`) in Google Docs templates are replaced with column data from Google Sheets.
3. **Document Generation**: The script generates a copy of each selected template, filling placeholders with the data from the spreadsheet.
4. **Storage**: Documents are saved in the specified Google Drive folder.

## Usage

### Template Setup
1. Create a Google Docs template with placeholders in `<<double angle brackets>>`.
2. In the script's `templates` object, add each template's file ID.

### Google Sheets Setup
1. Use columns corresponding to each placeholder in the template.
2. Add checkboxes to cells for template selection.

### Script Installation
1. In Google Sheets, go to **Extensions > Apps Script**.
2. Paste the script code for `generateForSpreadsheets`.
3. Update `TARGET_FOLDER_ID` with the Google Drive folder ID where documents should be saved.
4. Add your template IDs in the `templates` object.

### Running the Script
1. Enter data and select templates using checkboxes in Google Sheets.
2. Run `generateDocuments()` to generate and save documents to Google Drive.

### Script Components
- **generateDocuments()**: Main function to iterate over templates, generate documents, and save to Drive.
- **createDocumentFromTemplate(templateId, docName, titles, values)**: Generates a document from a template and replaces placeholders.

## Example
With a template containing `<<Name>>` and `<<Date>>`, and Google Sheets columns labeled `Name` and `Date`, the script will:
- Generate documents for each row where the template checkbox is checked.
- Replace placeholders in the template with Google Sheets data.
- Save the document in the specified folder.

## Troubleshooting
- **Invalid Template ID**: Verify template IDs in the `templates` object.
- **Placeholder Not Found**: Ensure each placeholder matches a Google Sheets column header.

## License
Open-source and free to use.
