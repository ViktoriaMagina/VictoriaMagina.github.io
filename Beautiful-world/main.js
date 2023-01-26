let zSpasing = -2000;
let lastPost = zSpasing/5;
let frames = document.getElementsByClassName("frame")
let framesArray =  Array.from(frames)
let zValues = []
let soundBtn = document.querySelector('.sound')
let audio = document.querySelector(".audio")

window.addEventListener('scroll', ()=> {
    let top = document.documentElement.scrollTop
    let delta = lastPost - top
    lastPost = top
    framesArray.forEach((n , i )=> {
        zValues.push((i* zSpasing) + zSpasing)
        zValues[i] += delta * -5
        let frame = framesArray[i]
        let transfrom = `translateZ(${zValues[i]}px)`
        let opacity = zValues[i] < Math.abs(zSpasing) / 1.8 ? 1 :0
        frame.setAttribute("style", `transform: ${transfrom}; opacity: ${opacity}`)
    })
})
soundBtn.addEventListener("click", (e)=> {
    soundBtn.classList.toggle("paused")
    audio.paused ? audio.play() : audio.pause()
})
window.scrollTo(0,1)
window.onfocus = () => {
    soundBtn.classList.contains("paused") ?  audio.pause() : audio.play()
}
window.onblur = () => {
    audio.pause()
    soundBtn.classList.add("paused")
}