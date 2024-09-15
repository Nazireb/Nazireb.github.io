const doStuff = () => {
    alert("Hello World");
}

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};

//Showing data from an input field
/*document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;    
}*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}


// Add a second button, called say goodbye
// When clicked change the text to goodbye everone and remove the special styles
