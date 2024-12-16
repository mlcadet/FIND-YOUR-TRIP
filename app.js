//Making the slider working for the first image

const sliderImgs =[
  "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=400", 
  
  "https://images.pexels.com/photos/29719542/pexels-photo-29719542/free-photo-of-stunning-sunset-over-alpine-mountains-and-foliage.jpeg?auto=compress&cs=tinysrgb&w=400", 
  
  "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400", 
  
  "https://images.pexels.com/photos/2674062/pexels-photo-2674062.jpeg?auto=compress&cs=tinysrgb&w=400", 
  
  "https://media.istockphoto.com/id/478656454/photo/maroon-bells-autumn-aspen-trees-lake-reflections-aspen-colorado.webp?b=1&s=612x612&w=0&k=20&c=-sZ8Kd1hV6DZMdh9WEOgyFUjkBnGrMiVOjLjlfHo0KE=", 

  "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_640.jpg"

];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];
let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 5000);

//Changing the slider 
// const changeSliderImage = () => {
//   sliderGrids.map((gridItem, index) => {
//     setTimeout(() => {
//       gridItem.classList.remote('hide');

//       setTimeout(() => {
//         if (index == sliderGrids.length - 1) {
//           currentImage = 0;
//         } else{
//           currentImage++;
//         }
//         sliderImage.src = `img/${sliderImgs[currentImage]}`;
//         sliderGrids.map((item, i) => {
//           setTimeout(() => {
//             item.classList.add('hide')
//           }, i * 100); 
//         })
//       }

//     }, 100);
//   })
// }



/*--The above code not working try st else--*/
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 4.5, // Number of slides visible
  centeredSlides: true, // Center the active slide
  spaceBetween: 30, // Space between slides
  loop: true, // Enable looping
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  breakpoints: {
    // Responsive design, changing slidesPerView based on screen width Code by Amit Niranjan
    640: {
      slidesPerView: 1.4
    },
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 4.2
    }
  }

})


// adjusting the navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(scroll >= 200) {
    navbar.classList.add('bg');
  } else {
    navbar.classList.remove('bg')
  }
})


// slider images array





// slider images array