function myFunction(a) {
    a.parentNode.getElementsByClassName('dropdown-content')[0].classList.toggle("show");
  }
  
  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        document.links[i].className = 'current';
    }
 }