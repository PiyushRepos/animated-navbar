const menu = document.querySelector(".nav i");
const closeMenu = document.querySelector(".nav-menus i");

let tl = gsap.timeline();
tl.pause()

tl.to(".nav-menus", {
  right: 0,
  duration: 0.45,
});

tl.from(".nav-menus h4", {
  x: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".nav-menus i", {
  opacity: 0,
});

menu.addEventListener('click', function(){
    tl.play();
});

closeMenu.addEventListener('click', function(){
    tl.reverse();
});
