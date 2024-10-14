document.getElementById("signup").addEventListener("click", () => {

    alert("Membership Signup Successfull!");
});

const toggleNav = () => {
    document.getElementById("nav").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("hamburger").onClick = toggleNav;
}

// JSON
const getGames = async () => {
    const url = "games.json";

    try{
        const response = await fetch(url);
        return await response.json();

    } catch(error){
        console.log(error);
    }
}

const showGames = async () => {
    let games = await getGames();

    games.forEach((game) => {

    });
}