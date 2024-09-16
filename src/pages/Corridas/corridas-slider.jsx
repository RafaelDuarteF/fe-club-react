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
    if (direction.className === 'gallery-controls-anterior') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      const element = document.querySelector(`.gallery-controls-${control}`);
      if (element) {
        element.innerText = '';
      }
    });
  }

  useControls() {
    const triggers = [
      document.querySelector('.gallery-controls-anterior'),
      document.querySelector('.gallery-controls-proximo'),
    ];
    triggers.forEach((control) => {
      if (control) {
        control.addEventListener('click', (e) => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      }
    });
  }
}

export default function NewCarousel() {
  const container = document.querySelector('.gallery-container');
  const controls = ['anterior', 'proximo'];
  const items = document.querySelectorAll('.race-img');

  if (container && items.length > 0) {
    return new Carousel(container, items, controls);
  } else {
    return null; 
  }
}
