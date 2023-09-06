// toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
         
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        });
        
        let header = document.querySelector('header');

        header.classList.toggle('sticky' , window.screenY > 100);

        menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Video Editor', 'Designer', 'React Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
let url =
  "https://script.google.com/macros/s/AKfycbykrPMLUI9FXPrVYISvg8tgyDuvnOOcxnAnII0JI4-NY97hVKIP1jWzuOKWFjbQUFHw6g/exec";

let form = document.querySelector("#enquiry-form");
form.addEventListener('submit', (e) =>{
  let data = new FormData(form);
  console.log(data);

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.text())
    .then((finalRes) => console.log(finalRes), console.log("Data sent!"))
    .catch((err) => console.error(err));
  e.preventDefault();
})