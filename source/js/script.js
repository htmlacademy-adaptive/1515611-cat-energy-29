
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.main-navigation__toggle');
nav.classList.add('main-nav--closed');
nav.classList.remove('main-nav--nojs');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
});



const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

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
