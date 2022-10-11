const bgItems = document.querySelectorAll('.slide-bg__link');
const imageSlides = document.querySelectorAll('.slide-bg__inner');
const shapes = document.querySelectorAll('.shapes__content');
const shapesSlides = document.querySelectorAll('.shapes__item');
const mainSection = document.querySelector(".main-section")
const helperInput = document.querySelector('#helper-input')

const mouse = document.querySelector('.mouse')
const slideBg = document.querySelector('.slide-bg')
const links = document.querySelectorAll('a')

const slidesCount = 5;
let slideCounter = 1;


const startComplete =() => {
    imageSlides.forEach(el => {el.style.opaity = 1})
    shapesSlides.forEach(el => {el.style.opaity = 1})
}

const startinTl = gsap.timeline({onComplete: startComplete, ease: "power1.out"})

shapes.forEach(el => {el.style.backgroundColor = `${el.dataset.bg}`})
bgItems.forEach(el => {el.style.backgroundImage = `url('${el.dataset.bg}')`})


const bgSlides = (params) => {
    if(params == "up"){
        let itemNow = `slide-${slideCounter}`
        if(slideCounter < slidesCount){
            mainSection.classList.remove(itemNow)
            slideCounter = slideCounter  + 1
            itemNow = `slide-${slideCounter}`
            mainSection.classList.add(itemNow)
        }
    }
    if(params == "down"){
        let itemNow = `slide-${slideCounter}`
        if(slideCounter > 1){
            mainSection.classList.remove(itemNow)
            slideCounter = slideCounter  - 1
            
            itemNow = `slide-${slideCounter}`
            mainSection.classList.add(itemNow)
        }
    }
}


function startAnimation(){
    const currentSlide = document.querySelector(".slide-bg__inner--current")
    const currentShape = document.querySelector(".shapes__item--current")
    const currentText = document.querySelector(".slides-container__slide--active")

    startinTl.to('.header', 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.5
    })
    .to('.main-section__explore', 0.5, {
        opacity: 1,
        y: 0,
    }, '-=0.5')
    .to(currentText.querySelector('.slides-container__title'), 0.6, {
        opacity: 1,
        y: 0,
    }, '-=0.1')
    .to(currentText.querySelector('.designers-info'), 0.6, {
        opacity: 1,
        y: 0,
    }, '-=0.4')
    .from(currentSlide, 0.4, {
        xPercent: 100,
    }, '-=0.4')
    .from(currentSlide.querySelector('.slide-bg__link'), 0.4, {
        xPercent: -100,
    }, '-=0.4')
    .from(currentShape, 0.6, {
        xPercent: 100,
    }, '-=0.2')
    .from(currentShape.querySelector('.shapes__content'), 0.6, {
        xPercent: -100,
        delay: -0.6,
    }, '-=0.2')
}

const imageSlidesFunc = (value) => {
    let currentSlide = document.querySelector(".slide-bg__inner--current")
    let nextSlide
    if(value == 'up'){
        nextSlide = currentSlide.previousElementSibling
    }
    if(value == 'down'){
        nextSlide = currentSlide.nextElementSibling
    }
    currentSlide.classList.add("index")
    if(!(nextSlide === null)){
        imageSlides.forEach(el => {el.classList.remove("index")})
        const tl = gsap.timeline({
            onComplete: function(){
                currentSlide.classList.remove("index")
            }
        })
        tl.from(nextSlide, 0.5, {
            xPercent: 100,
        })
        .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
            xPercent: -100,
            delay: 0.5,
        })
        currentSlide.classList.remove("slide-bg__inner--current")
        nextSlide.classList.add("slide-bg__inner--current")
    }
}

const shapesSlidesFunc = (value) => {
    let currentSlide = document.querySelector(".shapes__item--current")
    let nextSlide
    if(value == 'up'){
        nextSlide = currentSlide.previousElementSibling
    }
    if(value == 'down'){
        nextSlide = currentSlide.nextElementSibling
    }
    currentSlide.classList.add("index")
    if(!(nextSlide === null)){
        shapesSlides.forEach(el => {el.classList.remove("index")})
        const tl = gsap.timeline({
            onComplete: function(){
                currentSlide.classList.remove("index")
            }
        })
        tl.from(nextSlide, 0.5, {
            xPercent: 100,
            delay: 0.5,
        })
        .from(nextSlide.querySelector('.shapes__content'), 0.5, {
            xPercent: -100,
            delay: -1,
        })
        currentSlide.classList.remove("shapes__item--current")
        nextSlide.classList.add("shapes__item--current")
    }
}

const textSlides = (value) => {
    let currentSlide = document.querySelector(".slides-container__slide--active")
    let nextSlide
    if(value == 'up'){
        nextSlide = currentSlide.previousElementSibling
        console.log(nextSlide)
    }
    if(value == 'down'){
        nextSlide = currentSlide.nextElementSibling
        console.log(nextSlide)

    }
    if((nextSlide && nextSlide.classList.contains('main-section__explore'))){
        const tl = gsap.timeline()
        tl.to(currentSlide.querySelector('.slides-container__title'), 0.6, {
            opacity: 0,
            y: 100
        })
        .to(currentSlide.querySelector('.designers-info'), 0.6, {
            opacity: 0,
            y: 100
        }, '-=0.6')
        .to(nextSlide.querySelector('.slides-container__title'), 0.6, {
            opacity: 1,
            y: 0
        }, '-=0.1')
        .to(nextSlide.querySelector('.designers-info'), 0.6, {
            opacity: 1,
            y: 0
        }, '-=0.5')
        currentSlide.classList.remove("slides-container__slide--active")
        nextSlide.classList.add("slides-container__slide--active")
    }
}

const showNextSlide = () => {
    imageSlidesFunc("up")
    shapesSlidesFunc("up")
    textSlides("up")
    bgSlides("up")
}

const showPrevSlide = () => {
    imageSlidesFunc("down")
    shapesSlidesFunc("down")
    textSlides("down")
    bgSlides("down")
}

const init = () => {
    window.onload = function(){
        const preloader = document.querySelector('.preloader')
        preloader.classList.add('preloader-animation')
        setTimeout(()=> {
            preloader.classList.remove('preloader-animation')
            preloader.classList.add('preloader-hidden')
        }, 3000)
        setTimeout(()=> {
            preloader.classList.remove('preloader-hidden')
            preloader.classList.add('preloader-none')
            startAnimation()
            if(window.innerWidth >= 768){
                document.addEventListener('mousemove', mouseMove)
                slideBg.addEventListener('mouseover', mouse.classList.add('view-visible'))
                slideBg.addEventListener('mouseleave', mouse.classList.remove('view-visible'))
                
                links.forEach(el => {
                    el.addEventListener('mouseover', mouse.classList.add('view-visible'))
                    el.addEventListener('mouseleave', mouse.classList.remove('view-visible'))
                })
            }
        }, 3200)
    }

    if(window.innerWidth >= 768){
        window.addEventListener('wheel', (e) => {
            let delta = -e.deltaY;
            console.log(delta)
            if(delta > 0){
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showPrevSlide()
                    setTimeout(()=> {
                        helperInput.value = 1
                    }, 1500)
                }
                
            }
            else{
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showNextSlide()
                    setTimeout(()=> {
                        helperInput.value = 1
                    }, 1500)
                }
                
            }
        })
    }
    else{
        document.addEventListener('swiped-left', () => {
            console.log('swiped-left')
            showNextSlide()
        })
        document.addEventListener('swiped-right', () => {
            console.log('swiped-right')
            showPrevSlide()
        })
    }
}

const mouseMove = (e) => {
    if(e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)){
        mouse.style.opaity = 0
    }
    else{
        mouse.style.opaity = 1;
        mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`
    }
}

init()



