//Making the slider working for the first image

const sliderImgs =["img1.png", "img2.png", "ing3.png", "img4.png", "img5.png", "img6.png"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];
let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 5000);

//Changing the slider 
const changeSliderImage = () => {
  sliderGrids.map((gridItem, index) => {
    setTimeout(() => {
      gridItem.classList.remote('hide');

      setTimeout(() => {
        if (index == sliderGrids.length - 1) {
          currentImage = 0;
        } else{
          currentImage++;
        }
        sliderImage.src = `img/${sliderImgs[currentImage]}`;
        sliderGrids.map((item, i) => {
          setTimeout(() => {
            item.classList.add('hide')
          }, i * 100); 
        })
      }

    }, 100);
  })
}

// slider images array

