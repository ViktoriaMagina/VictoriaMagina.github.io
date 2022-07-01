
let mixer = mixitup('.price__list');

const headerBurgerBtn = document.querySelector('.header-burger')
$(document).ready(function() {
  $("#phone").mask("+9-(999)-999-99-99");
  $('.make-an-appointment-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#tel',
	});
  $("#make-an-appointment-popup-tel").mask("+9-(999)-999-99-99");
})

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
