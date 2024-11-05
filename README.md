GenerateForSpreadsheets
Overview
The GenerateForSpreadsheets Google Apps Script allows you to automate document generation using Google Docs templates. This script pulls data from a Google Sheets file and inserts it into specified placeholders in a Google Docs template, then saves the generated document to a specific folder in Google Drive.

Features
Automatically generates documents based on a Google Docs template.
Customizable placeholders within the template are replaced by values from the Google Sheets file.
Documents are saved in a designated folder in Google Drive.
Supports multiple templates that can be selected by checking a box in the Google Sheets file.
Requirements
Google Sheets: Used as the source of data and input triggers.
Google Docs: Serves as the template for generated documents.
Google Drive: Stores the generated documents.
How It Works
Data Input: In the Google Sheets file, input the data you wish to populate into the Google Docs template. Select the templates you want to use by marking specific cells (e.g., checkboxes).
Template Setup: The script reads a list of available templates and their unique IDs. The templates contain placeholders (e.g., <<placeholder>>) that match column headers in the Google Sheets file.
Document Generation: When the script is run, it generates a copy of each selected template, replacing placeholders with the relevant data from the spreadsheet.
Storage: The generated document is saved in the specified Google Drive folder.
Usage
Setting Up Templates
Create a Google Docs template with placeholders in double angle brackets, like <<Placeholder>>.
Ensure each placeholder has a corresponding column in the Google Sheets file to pull data from.
Add each template's file ID and name in the templates object in the script.
Setting Up the Google Sheets File
Ensure each row has data corresponding to the placeholders in the template.
Add checkboxes or other indicators in specific cells to select which templates to generate.
Script Installation
Open the Google Sheets file and go to Extensions > Apps Script.
Copy and paste the generateForSpreadsheets script code.
Modify the TARGET_FOLDER_ID constant with the ID of the folder in Google Drive where you want to save the generated documents.
Set up the templates object with your template IDs and names.
Running the Script
After setting up the template and data in the Google Sheets file, run the generateDocuments() function to start the process.
The script will create a new document for each selected template and save it to the designated Google Drive folder.
Script Components
generateDocuments(): Main function that iterates over the templates, generating documents and saving them to Google Drive.
createDocumentFromTemplate(templateId, docName, titles, values): Generates a new document from a template, replacing placeholders with values from the spreadsheet.
Example
Given a template with placeholders <<Name>> and <<Date>>, and a Google Sheets file with data in columns labeled Name and Date, the script will:

Generate a document copy for each row of data where the template checkbox is selected.
Replace <<Name>> and <<Date>> in the template with the respective data from the Google Sheets file.
Save the generated document in the specified Google Drive folder.
Troubleshooting
Error: Invalid Template ID: Ensure the template ID in the templates object matches the actual Google Docs file ID.
Placeholder Not Found: Verify that each placeholder in the Google Docs template matches a column header in the Google Sheets file.
License
This project is open-source and free to use.
