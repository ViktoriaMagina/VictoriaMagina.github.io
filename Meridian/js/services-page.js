$(document).ready(function() {
  $("#phone").mask("+9-(999)-999-99-99");
  $('.make-an-appointment-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#tel',
	});
  $("#make-an-appointment-popup-tel").mask("+9-(999)-999-99-99");
  $('.team__slider-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    lazyLoad: "progressive",
    centerPadding: "70px",
    nextArrow: `<div class="team__slider-arrow-box team__slider-arrow-box-next"><button type="button" class="team__slider-arrow team__slider-arrow-next"></button></div>`,
    prevArrow: `<div class="team__slider-arrow-box team__slider-arrow-box-prev"><button type="button" class="team__slider-arrow team__slider-arrow-prev"></button></div>`,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
        },
      ]
  });
  $('.treatment__slider-inner ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: `<div class="treatment__slider-arrow-box treatment__slider-arrow-box-next"><button type="button" class="treatment__slider-arrow treatment__slider-arrow-next"></button></div>`,
    prevArrow: `<div class="treatment__slider-arrow-box treatment__slider-arrow-box-prev"><button type="button" class="treatment__slider-arrow treatment__slider-arrow-prev"></button></div>`,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  });
  $('.works-slider__inner ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    draggable: false,
    nextArrow: `<div class="works-slider__arrow-box works-slider__arrow-box-next"><button type="button" class="works-slider__arrow works-slider__arrow-next"></button></div>`,
    prevArrow: `<div class="works-slider__arrow-box works-slider__arrow-box-prev"><button type="button" class="works-slider__arrow works-slider__arrow-prev"></button></div>`,
    responsive: [
        {
          breakpoint: 680,
          settings: {
            draggable: false,
            swipe: false,
          }
        },
        // {
        //   breakpoint: 1150,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
        // },
        // {
        //   breakpoint: 800,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // },
        // {
        //     breakpoint: 500,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       centerMode: true,
        //       arrows: false,
        //     }
        // },
        // {
        //     breakpoint: 450,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       centerMode: false,
        //       arrows: false,
        //     }
        // }
      ]
  });
  $('.kids__link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
  $(function(){   
      $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty();
  });
})
var config = {
    load: {
      filter: '.category-b'
  }
};
let mixer = mixitup('.works__list', config);

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
