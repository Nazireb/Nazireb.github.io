const getIceCreams = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log('Error fetching ice creams:', error);
    }
};

const showIceCreams = async () => {
    const iceCreams = await getIceCreams();

    iceCreams.forEach((iceCream) => {
        document.getElementById("gallery").append(getIceCreamSection(iceCream));
    });
};

const getIceCreamSection = (iceCream) => {
    const basePath = "https://portiaportia.github.io/json/images/ice-creams/";

    const item = document.createElement("div");
    item.classList.add("ice-cream-item");

    const img = document.createElement("img");
    img.src = `${basePath}${iceCream.image}`; 
    img.alt = iceCream.name;
    item.append(img);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = iceCream.name;
    item.append(overlay);

    return item;
};

showIceCreams();
