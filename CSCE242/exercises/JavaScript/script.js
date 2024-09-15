let slide = document.getElementById("slide");

let changeimg = document.getElementById("change");

let change = () => {
    changeimg.src = "https://picsum.photos/200";
}

changeimg.onclick = change;

