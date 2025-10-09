document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const getTravel = async() => {
    const url = "";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("sorry");
    }
};