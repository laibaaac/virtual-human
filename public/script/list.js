
const faders = document.querySelectorAll(".moveUp");
const sizes = document.querySelectorAll(".sizeUp");
const slides = document.querySelectorAll(".slideLeft");

const appearOptions = {
  threshold: 1
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

slides.forEach(slide => {
  appearOnScroll.observe(slide);
});
sizes.forEach(size => {
  appearOnScroll.observe(size);
});
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

//Get the button:
mybutton = document.getElementById("B2TBtn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.getElementById("resetButton").addEventListener('click', () => {

  document.getElementById("plain-textarea-id").value = '';

  const timelineImages = Array.from(document.getElementsByClassName('timelineImg'));
  timelineImages.forEach(timelineImg => {
    timelineImg.remove();
  })})

if(navigator.clipboard) {
  

  const codeSnippet = document.querySelectorAll('li textarea')
  
  codeSnippet.forEach((element, index) => {  
    element.addEventListener('click', () =>{
    setClipboard(element.textContent)
    })
  })
  
  function setClipboard(text) {

      const type = "text/plain";
      const blob = new Blob([text], { type });
      const data = [new ClipboardItem({ [type]: blob })];
  
      navigator.clipboard.write(data).then(
          function () {
          /* success */
            // console.log(data)
          },
          function () {
          /* failure */
            // console.log('error clipping')
          }
      );
  
  }
  }

