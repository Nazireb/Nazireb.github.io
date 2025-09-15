document.getElementById("sun").onclick = () => {
    document.getElementById("song").innerHTML=`
        <p>Here comes the sun</p>
        <p>sun</p>
        <p> sun</p>
        <p>  sun</p>
        <p>Here it comes</p>
        `;
}

document.getElementById("pick").oninput = (event) => {
    const song = document.getElementById("output-color");
    const hex = event.currentTarget.value.toUpperCase();
    song.style.color = hex;
    song.querySelector("code").innerHTML = hex;
}

document.getElementById("weather").onclick = () => {
    const sunny = "../js/images/sun.jpg"
    const song = document.getElementById("weather");
    song.src = sunny;
}