const galleryContainer = document.querySelector('.gallery-container');
const galleryControls = ['anterior', 'proximo'];
const galleryItems = document.querySelectorAll('.race-img');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('race-img-1');
      el.classList.remove('race-img-2');
      el.classList.remove('race-img-3');
      el.classList.remove('race-img-4');
      el.classList.remove('race-img-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`race-img-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == 'gallery-controls-anterior') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      document.querySelector(`.gallery-controls-${control}`).innerText = '';
    });
  }

  useControls() {
    const triggers = [
      document.querySelector(`.gallery-controls-anterior`),
      document.querySelector(`.gallery-controls-proximo`),
    ];
    triggers.forEach((control) => {
      control.addEventListener('click', (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

export default function NewCarousel() {
  return new Carousel(galleryContainer, galleryItems, galleryControls);
}
