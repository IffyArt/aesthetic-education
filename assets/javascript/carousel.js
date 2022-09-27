let tempIndex = 0;
const listItems = document
  .querySelector('.carousel__items')
  .querySelectorAll('li');
const previousButton = document.querySelector('.carousel__button--previous');
const nextButton = document.querySelector('.carousel__button--next');
const dots = document.querySelector('.carousel__dots').querySelectorAll('li');

function changeCarousel() {
  const currentIndex = Math.abs(tempIndex % listItems.length);

  listItems.forEach((item, index) => {
    const isCurrentItem = index === currentIndex;
    if (isCurrentItem) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  dots.forEach(function (dot, index) {
    const isCurrentItem = index === currentIndex;
    if (isCurrentItem) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

previousButton.addEventListener('click', function () {
  tempIndex -= 1;
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
