
  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        document.links[i].className = 'current';
    }
 }
 

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


document.getElementById("resetButton").addEventListener('click', () => {

  document.getElementById("plain-textarea-id").value = '';
  const timelineImages = Array.from(document.getElementsByClassName('timelineImg'));

  timelineImages.forEach(timelineImg => {
    timelineImg.remove();
  })})


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

