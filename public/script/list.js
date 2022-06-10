
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



// document.getElementById("copyThis").addEventListener("click", copyCode);

//   function copyCode() {
//     var Text = document.getElementById("copyString");
//     Text.select();
//     navigator.clipboard.writeText(Text.value);
//     document.getElementById("copyThis").innerHTML = "Text copied!";
//     setTimeout(resetCopy, 2000);
//   }

//   function resetCopy() {
//     document.getElementById("copyThis").innerHTML = "Copy code";
//   }
