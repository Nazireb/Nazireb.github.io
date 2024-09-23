
document.getElementById('red').onclick = (e) => {
    const Red = e.target.value;

    if (Red >= 0 && Red <= 255) {
    const rgb = `rgb(${Red}, 0, 0)`;
    document.colorslider.style.backgroundColor = rgb;
    }
};

const picture = document.getElementById('pic');

document.querySelector('.slider button').forEach(button => {
    button.addEventListener('click', (e) => {
        const size = e.target.innerHTML.toLowerCase();

        if (size === 'small') {
            pictureContainer.src = 'https://picsum.photos/200';
        } else if (size === 'medium') {
            pictureContainer.src = 'https://picsum.photos/400';
        } else if (size === 'large') {
            pictureContainer.src = 'https://picsum.photos/600';
        }
    });
});


