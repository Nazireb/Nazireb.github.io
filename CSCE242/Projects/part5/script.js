document.getElementById("signup").addEventListener("click", () => {

    alert("Membership Signup Successfull!");
});

const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("nav-toggle").onClick = toggleNav;
}
