function scrollFunction(){document.body.scrollTop>80||document.documentElement.scrollTop>80?document.getElementById("navbar").style.padding="1.5rem 2rem":document.getElementById("navbar").style.padding="2rem 2rem"}function scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}window.onscroll=function(){scrollFunction()};const navLinks=document.querySelectorAll(".dropdown-item"),menuToggle=document.getElementById("navbarSupportedContent"),bsCollapse=new bootstrap.Collapse(menuToggle,{toggle:!1});navLinks.forEach((o=>{o.addEventListener("click",(()=>{bsCollapse.toggle()}))}));