document.getElementById("signup").addEventListener("click", () => {

    alert("Membership Signup Successfull!");
});

const toggleNav = () => {
    document.getElementById("nav").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("hamburger").onClick = toggleNav;
}
