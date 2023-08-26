

const mainNavToggle = document.querySelector('.main-navigation__toggle');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

mainNavToggle.addEventListener('click', function () {
if (mainNavToggle.classList.contains('main-nav--cross')) {
  mainNavToggle.classList.remove('main-nav--cross');
  mainNavToggle.classList.add('main-nav--opened');
 }
 else {
  mainNavToggle.classList.add('main-nav--cross');
  mainNavToggle.classList.remove('main-nav--opened');
 }
});

if(sliderButton){
  sliderButton.addEventListener('click', () => {
    const stateBefore = document.querySelector('.slider--state-before');
    const stateAfter = document.querySelector('.slider--state-after');
    if (stateBefore || stateAfter) {
      slider.classList.toggle('slider--state-before');
      slider.classList.toggle('slider--state-after');
    } else {
      slider.classList.add('slider--state-after');
    }
  });

}