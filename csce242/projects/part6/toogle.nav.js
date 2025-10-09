document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const getTravel = async() => {
    const url = "https://nazireb.github.io/csce242/projects/part6/json/destinations.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showTravel = async () => {
    const travel = await getTravel();
    const listDiv = document.getElementById("destinations-list");

    travel.forEach((dest => {
        const section = document.createElement("section");
        section.classList.add("card");

        const h3 = document.createElement("h3");
        h3.innerHTML = dest.name;
        section.append(h3);

        const img = document.createElement("img");
        img.src = dest.img_name;
        section.append(img);

        const p = document.createElement("p");
        p.textContent = dest["short-desc"];
        section.append(p);

        listDiv.append(section);
    }))

}

showTravel();