const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error){

    }
}

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");
    shoes.forEach((shoe)=>{
        console.log(shoe.name);
    });
}

showShoes();