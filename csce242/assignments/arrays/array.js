const cards = document.getElementById('cards');
const popup = document.getElementById('popup');
const img = document.getElementById('popup-img');
const title = document.getElementById('popup-title');
const closeBtn = document.getElementById('close');

const before = {                               
  Marco: '../arrays/images/labs.jpg',
  Coco:  '../arrays/images/pits.jpg',
  Icy:   '../arrays/images/poodles.jpg',
  Bruno: '../arrays/images/rots.jpg'
};
const after = {                                     
  Marco: '../arrays/images/labh.jpg',
  Coco:  '../arrays/images/pith.jpg',
  Icy:   '../arrays/images/poodleh.jpg',
  Bruno: '../arrays/images/roth.jpg'
};

cards.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  const name = card.querySelector('.pet-name').textContent.trim();
  title.textContent = `${name} after adoption`;
  img.src = after[name];                                
  img.alt = `${name} after adoption`;
  popup.classList.remove('hidden');
});

function hidePopup() {
    popup.classList.add('hidden');
    img.src = '';
}

closeBtn.addEventListener('click', hidePopup);
popup.addEventListener('click', (e) => { if (e.target === popup) hidePopup(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') hidePopup(); });