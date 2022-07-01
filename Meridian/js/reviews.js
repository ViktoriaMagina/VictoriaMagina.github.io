
$(document).ready(function() {
  $("#phone").mask("+9-(999)-999-99-99");
  $('.make-an-appointment-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#tel',
	});
  $("#make-an-appointment-popup-tel").mask("+9-(999)-999-99-99");
  $('.reviews-slider__main-inner ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: `<div class="reviews-slider__slider-arrow-box reviews-slider__slider-arrow-box-next"><button type="button" class="reviews-slider__slider-arrow reviews-slider__slider-arrow-next"></button></div>`,
    prevArrow: `<div class="reviews-slider__slider-arrow-box reviews-slider__slider-arrow-box-prev"><button type="button" class="reviews-slider__slider-arrow reviews-slider__slider-arrow-prev"></button></div>`,
    responsive: [
        {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
        }
      ]
  });
  $('.kids-rewiews__link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
})
const headerBurgerBtn = document.querySelector('.header-burger')
const headerMenuBtn = document.querySelector('.header-menu__close')

headerBurgerBtn.addEventListener('click', function(){
    const body = document.querySelector('body') 
    const headerMenu = document.querySelector('.header-menu') 
    headerMenu.classList.add('active')
    body.classList.add('hidden')
})
headerMenuBtn.addEventListener('click', function(){
    const body = document.querySelector('body') 
    const headerMenu = document.querySelector('.header-menu') 
    headerMenu.classList.remove('active')
    body.classList.remove('hidden')
})

const dropdownLinks = document.querySelectorAll(".dropdown-link")
for(let i = 0; i < dropdownLinks.length; i++){
  dropdownLinks[i].addEventListener("click", function(){
    const dropdownConatiner =  dropdownLinks[i].closest(".header-bottom__menu-item");
    dropdownConatiner.classList.toggle("active")
  })
}