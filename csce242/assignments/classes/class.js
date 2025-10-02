class Painting {
  constructor({ title, artist, image, framed = false }) {
    this.title = title;
    this.artist = artist;
    this.image = image;
    this.framed = framed;
  }

  getSection(index) {
    return `
      <article class="card" data-index="${index}" tabindex="0">
        <h3>${this.title}</h3>
        <img class="thumb" src="${this.image}" alt="${this.title}">
      </article>`;
  }
}

const paintings = [
    new Painting({
        title: "The Bee",
        artist: "Richards",
        image: "images/bee.png",
        framed: true
    }),
    new Painting({
        title: "Kitten",
        artist: "CDD20",
        image: "images/kitten.png",
        framed: false
    }),
    new Painting({
        title: "Flowers",
        artist: "DoctorFlower",
        image: "images/flowers.png",
        framed: false
    }),
    new Painting({
        title: "Animals",
        artist: "AnimalMan",
        image: "images/animals.png",
        framed: true
    }),
    new Painting({
        title: "Dog",
        artist: "TheDogGuy",
        image: "images/doggy.jpg",
        framed: false
    }),
];

const gall = document.getElementById("gallery");
gall.innerHTML = paintings.map((p, i) => p.getSection(i)).join("");

const modal = document.getElementById("id01");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const modalImg = document.getElementById("modal-img");
const modalWrap = document.getElementById("modal-img-wrap");
const modalNote = document.getElementById("modal-frame-note");

function openCard(index) {
    const p = paintings[index];
    modalTitle.textContent = p.title;
    modalArtist.textContent = p.artist;
    modalImg.src = p.image;
    modalImg.alt = p.title;

    modalWrap.classList.toggle('framed', !!p.framed);

    modal.style.display = "block";
}

gall.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    openCard(+card.dataset.index);
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};