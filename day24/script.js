const nav = document.getElementById('main');
const topOfNav = nav.offsetTop;
const logo = document.querySelector('.logo')

function fixNav(){
    console.log(topOfNav, window.scrollY);
   if(window.scrollY >= topOfNav){
        document.body.classList.add('fixed-nav');
    }else{
       document.body.classList.remove('fixed-nav');
    }
}

//Slide-in function from Day 13

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const slideImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  
  slideImages.forEach(slideImage => {
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    //bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const halfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (halfShown && isNotScrolledPast) {
      slideImage.classList.add('active')
    } else {
        slideImage.classList.remove('active')
    }
    console.log('bla')
  })
  
}
window.addEventListener('scroll', fixNav)
window.addEventListener('scroll', debounce(checkSlide))


