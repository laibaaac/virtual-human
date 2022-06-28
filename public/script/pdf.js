const pdfmake = window.pdfMake;
const PDFButton = document.getElementById("pdftje");

function pdfButton() {
  var dd = { content: document.getElementById("plain-textarea-id").value };
  pdfmake.createPdf(dd).download();
}

// Add an event listener on CopyButton, when clicked copy the value from #plain-textarea-id and log the value to the console
PDFButton.addEventListener("click", function () {
  var copyText = document.getElementById("plain-textarea-id");
  console.log(copyText.value);
  pdfButton();
});




/*var pdfmake = require('pdfmake');

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
}*/







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