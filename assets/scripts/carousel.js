let tempIndex = 0;
const carousel = document.querySelector('.carousel');
const listItems = carousel.querySelectorAll('.carousel__items > li');
const previousButton = carousel.querySelector('.carousel__button--previous');
const nextButton = carousel.querySelector('.carousel__button--next');
const dots = carousel.querySelectorAll('.carousel__dots > li');

function changeCarousel() {
  const currentIndex = tempIndex % listItems.length;

  for (let i = 0; i < listItems.length; i++) {
    if (i === currentIndex) {
      listItems[i].classList.add('active');
      dots[i].classList.add('active');
    } else {
      listItems[i].classList.remove('active');
      dots[i].classList.remove('active');
    }
  }
}

previousButton.addEventListener('click', function () {
  tempIndex === 0 ? (tempIndex = listItems.length - 1) : (tempIndex -= 1);
  changeCarousel();
});

nextButton.addEventListener('click', function () {
  tempIndex += 1;
  changeCarousel();
});

dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    tempIndex = index;
    changeCarousel();
  });
});
