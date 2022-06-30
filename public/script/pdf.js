var PdfPrinter = require('pdfmake');

("plain-textarea-id").submit(function(e){
    e.preventDefault()

    var text = $("#pdf").val()
    
    var val = htmlToPdfmake(text); 

    var dd = {content:val};

    pdfMake.createPdf(dd).download();
});
