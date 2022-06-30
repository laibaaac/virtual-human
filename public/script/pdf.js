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
  
  
  