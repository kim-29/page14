/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')

navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})
navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks=document.querySelectorAll('.nav__link')
navLinks.forEach(navLink=>
  navLink.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})
)

/*=============== ADD BLUR TO HEADER ===============*/

const blurHead=()=>{
  const header = document.getElementById('header')
  window.scrollY>50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHead)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = ()=>{
  const scrollup=document.getElementById('scroll-up');
  this.scrollY>35 ? scrollup.classList.add('show-scrollup')
                  : scrollup.classList.remove('show-scrollup')
}
window.addEventListener('scroll',scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const activeMenu=()=>{
  sections.forEach(section=>{
    const y= window.scrollY
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight-58;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector('.nav__menu a[href*='+sectionId+']');
    
    if( y > sectionTop && y<=sectionTop+sectionHeight){
      navLink.classList.add('active-link')
    }else{
      navLink.classList.remove('active-link')
    }
  })
}


window.addEventListener('scroll',activeMenu)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',distance:'60px',duration:3000, delay:400
})

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card',{delay:600,distance:'100px',interval:100})
sr.reveal('.about__data, .join__image',{origin:'right'})
sr.reveal('.about__image, .join__data',{origin:'left'})
sr.reveal('.popular__card',{interval:200})
