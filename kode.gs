// ID Folder tempat hasil dokumen akan disimpan
const TARGET_FOLDER_ID = "1CtW5qMsUCz6KQ52I52KCddvY11cMRBWD";

// Object template file dan ID-nya
const templates = {
  'C2': {id: 'changes_with_your_id_document'},
  'C3': {id: 'changes_with_your_id_document'},
  'C4': {id: 'changes_with_your_id_document'},
  'C5': {id: 'changes_with_your_id_document'},
  'C6': {id: 'changes_with_your_id_document'},
  'C7': {id: 'changes_with_your_id_document'},
  'C8': {id: 'changes_with_your_id_document'},
  'C9': {id: 'changes_with_your_id_document'},
  'C10': {id: 'changes_with_your_id_document'},
  'C11': {id: 'changes_with_your_id_document'},
  'C12': {id: 'changes_with_your_id_document'},
  'C13': {id: 'changes_with_your_id_document'},
  'C14': {id: 'changes_with_your_id_document'},
};

// Main Method for generate document
function generateDocuments() {
  const sheet = SpreadsheetApp.openById("change_your_id_sheets").getSheetByName("your_sheets_name");
  const rangeTitles = sheet.getRange("E16:E31").getValues();
  const rangeValues = sheet.getRange("B16:B31").getValues();
  
  for (let key in templates) {
    const isChecked = sheet.getRange(key).getValue();
    console.log(`Checkbox for ${key} is ${isChecked}`); // Log checkbox status
    if (isChecked) {
      const template = templates[key];
      console.log(`Processing template with key: ${key}, ID: ${template.id}`); // Log template ID
      
      if (!template.id) {
        console.error(`No ID found for template with key: ${key}`);
        continue; // Skip if ID is undefined
      }

      try {
        const docCopy = createDocumentFromTemplate(template.id, rangeTitles, rangeValues);
        
        // Pindahkan file ke folder tujuan jika berhasil dibuat
        const folder = DriveApp.getFolderById(TARGET_FOLDER_ID);
        folder.addFile(docCopy);
        
        // Hapus salinan dari My Drive setelah dipindahkan
        DriveApp.getRootFolder().removeFile(docCopy);
        
      } catch (error) {
        console.error(`Error processing template with ID ${template.id}: ${error}`);
      }
    }
  }
}

//Method for create cloning document
function createDocumentFromTemplate(templateId, titles, values) {
  try {
    const templateFile = DriveApp.getFileById(templateId);
    const docCopy = templateFile.makeCopy(`Document - ${new Date().toLocaleDateString()}`);
    const doc = DocumentApp.openById(docCopy.getId());
    const body = doc.getBody();
    
    // Ganti setiap placeholder dengan nilai dari spreadsheet
    titles.forEach((title, index) => {
      const placeholder = `<<${title[0]}>>`;
      const value = values[index][0];
      body.replaceText(placeholder, value || "");
    });
    
    doc.saveAndClose();
    return docCopy;
}
  } catch (error) {
    console.error(`Error creating document from template ID ${templateId}: ${error}`);
    return null;
  }
}
