var pdfmake = require('pdfmake');

var pdfContent = document.getElementById("plain-textarea-id");
document.getElementById('pdftje').addEventlistener("click", pdfButton)
function pdfButton() {
  var docDefinition = {
    content: [
    pdfContent.value
    ]}
  
    var now = new Date();
  
    var pdf = pdfmake.createPdf(docDefinition);
    pdf.write('pdfs/code.pdf').then(() => {
      console.log(new Date() - now);
    }, err => {
      console.error(err);
    });  
}







/*
 pdfMake.createPdf(docDefinition).download(); 

var fs = require('fs');
  
  var docDefinition = {
 

  };
  
  var options = {
    
  };
  
  var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream('document.pdf'));
  pdfDoc.end();*/