const nav = document.getElementById("nav");
const navB = document.getElementById("smallnav");

const smallnav = () => {
    nav.classList.toggle("active");
}
navB.onclick = smallnav;