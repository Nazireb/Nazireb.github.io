const loop = () => {
    const canvas = document.getElementById("canvas");
    const firstNumber = parseInt(document.getElementById("stars").value); 
    const errorMessage = document.getElementById("err-mess");
    const starMessage = document.getElementById("star-message");
    const ctx = canvas.getContext("2d");
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starMessage.style.visibility = "hidden";

  
    if (firstNumber <= 0) {
        errorMessage.style.visibility = "visible";
        return;
    } else {
        errorMessage.style.visibility = "hidden"; 
    }

    //Creating star
    const drawStar = (x, y, radius, points, color) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.moveTo(0, -radius);

        for (let i = 0; i < points; i++) {
            ctx.rotate(Math.PI / points);
            ctx.lineTo(radius * 0.5, radius * 0.5);
            ctx.rotate(Math.PI / points);
            ctx.lineTo(0, -radius);
        }

        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    };

    for (let i = 0; i < firstNumber; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 10 + 5;
        const points = 5;
        const color = '#f6f703'; 
        drawStar(x, y, radius, points, color);

     
    }
};

window.onload = () => {
    document.getElementById("btn-loop").onclick = loop;
};
