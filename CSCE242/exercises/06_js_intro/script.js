const doStuff = () => {
    alert("Hello World");
}

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};

// Add a second button, called say goodbye
// When clicked change the text to goodbye everone and remove the special styles
