// Funkyjive 3D - Minimal Modal Carousel & Project Data

const projects = [
  {
    title: "Synthwave Environment",
    images: [
      "img/project_synthwave/carousel/1.png",
      "img/project_synthwave/carousel/2.png",
      "img/project_synthwave/carousel/3.png"
    ],
    cover: "img/project_synthwave/project_synthwave.png",
    description: "A vibrant synthwave-inspired environment pack, featuring neon-lit landscapes, retro cityscapes, and modular assets for your digital worlds."
  },
  {
    title: "Hexagon Cave Environment",
    images: [
      "img/project_hex_cave/carousel/1.jpg",
      "img/project_hex_cave/carousel/2.jpg",
      "img/project_hex_cave/carousel/3.jpg",
      "img/project_hex_cave/carousel/4.jpg",
      "img/project_hex_cave/carousel/5.png",
      "img/project_hex_cave/carousel/6.png",
      "img/project_hex_cave/carousel/7.png",
      "img/project_hex_cave/carousel/8.png"
    ],
    cover: "img/project_hex_cave/project_hex_cave.jpg",
    description: "A stylized cave environment built from hexagonal tiles, perfect for platformers and adventure games. Includes modular cave pieces and glowing crystals."
  }
];
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const carouselImg = document.getElementById('carousel-img');
const modalDesc = document.getElementById('modal-description');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

let currentProject = 0;
let currentImage = 0;


function openModal(projectIdx) {
  currentProject = projectIdx;
  currentImage = 0;
  updateModal();
  // Theme switching for modal
  const modalContent = modal.querySelector('.modal-content');
  modalContent.classList.remove('synthwave', 'cave');
  if (currentProject === 0) {
    modalContent.classList.add('synthwave');
  } else if (currentProject === 1) {
    modalContent.classList.add('cave');
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateModal() {
  const project = projects[currentProject];
  carouselImg.src = project.images[currentImage];
  carouselImg.alt = project.title + ' image';
  modalDesc.textContent = project.description;
}

function nextImage() {
  const project = projects[currentProject];
  currentImage = (currentImage + 1) % project.images.length;
  updateModal();
}

function prevImage() {
  const project = projects[currentProject];
  currentImage = (currentImage - 1 + project.images.length) % project.images.length;
  updateModal();
}

// Card click listeners
Array.from(document.querySelectorAll('.project-card')).forEach((card, idx) => {
  card.addEventListener('click', () => openModal(idx));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
carouselNext.addEventListener('click', nextImage);
carouselPrev.addEventListener('click', prevImage);
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});
