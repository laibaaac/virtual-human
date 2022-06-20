var PdfPrinter = require('pdfmake');

("plain-textarea-id").submit(function(e){
    e.preventDefault()

    var text = $("#pdf").val()
    
    var val = htmlToPdfmake(text); 

    var dd = {content:val};

    pdfMake.createPdf(dd).download();
});

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