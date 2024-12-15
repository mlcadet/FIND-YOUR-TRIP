//Making the slider working

const sliderImgs =["img1.png", "img2.png", "ing3.png", "img4.png", "img5.png", "img6.png"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];
let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 5000);

