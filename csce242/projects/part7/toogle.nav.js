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

document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();
    const result = document.getElementById('result');
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
};