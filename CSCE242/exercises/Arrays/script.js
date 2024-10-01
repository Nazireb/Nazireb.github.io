const imageArray = [
    {id: 'birthday', title: 'Birthday', description: 'Lets get ready to celebrate'},
    {id: 'clown', title: 'Clown', description: 'Who wants to get a good laugh!'},
    {id: 'rain', title: 'Rain', description: 'I had to get my umbrella because of the rain'},
    {id: 'read', title: 'Read', description: 'Reading is always good for you'},
    {id: 'shovel', title: 'Shovel', description: 'Time to start digging'},
    {id: 'work', title: 'Work', description: 'I need to make sure I am all caught up with my work'}
];

imageArray.forEach((imageData) => {
    const imgElement = document.getElementById(imageData.id);

    imgElement.addEventListener('click', () => {
        document.getElementById('message').innerHTML = `<b>${imageData.title}</b> <br> ${imageData.description}`;
    });
});
