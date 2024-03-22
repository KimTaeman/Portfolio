const navBar = document.getElementById("nav-bar")

window.addEventListener("scroll", () => {
  if(window.scrollY > 0) {
    navBar.classList.add('nav-scrolled', 'navbar-dark');
  }
  else {
    navBar.classList.remove('nav-scrolled' , 'navbar-dark');
  }
})
