
// opening/closing the navbar

function openNav() {
    document.getElementById(
        "nav").style.height = "100%";
}

function closeNav() {
    document.getElementById(
        "nav").style.height = "0%";
}

// expanding/shrinking the navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1.5rem 2rem";

  } else {
    document.getElementById("navbar").style.padding = "2rem 2rem";
  }
}


// scroll to top button

function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  
