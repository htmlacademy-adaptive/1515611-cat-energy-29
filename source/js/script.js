

const mainNavToggle = document.querySelector('.main-navigation');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

mainNavToggle.addEventListener('click', function () {
if (mainNavToggle.classList.contains('main-nav--closed')) {
  mainNavToggle.classList.remove('main-nav--closed');
  mainNavToggle.classList.add('main-nav--opened');
 }
 else {
  mainNavToggle.classList.add('main-nav--closed');
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
