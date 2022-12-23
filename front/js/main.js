
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      wheel = document.querySelector('.bonus__main-wheel-reel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),
      wrapper = document.querySelector('.bonus'),
      wheelReel = document.querySelector('.bonus__main-wheel-reel'),
      musicBtn = document.querySelector('.bonus__music'),
      audio = document.querySelector('.audio'),
      bubbleText = document.querySelector('.bonus__main-woman-txt')

audio.volume = '0';

musicBtn.addEventListener('click', ()=>{
    if(musicBtn.classList.contains('on')){
        musicOff()
    } else {
        musicOn()
    }
})

function musicOn(){
    musicBtn.classList.add('on')
    musicBtn.querySelector('img').setAttribute('src', 'img/music-on.svg')
    audio.play()
}

function musicOff(){
    musicBtn.classList.remove('on')
    musicBtn.querySelector('img').setAttribute('src', 'img/music-off.svg')
    audio.pause()
}

let triesCounter = 0
let textAfterRotate = 'Vrei un Bonus? Ai 1 încercări';

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
        musicOn()
        bubbleText.innerHTML = textAfterRotate;

    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
        wheelReel.classList.add('_secondRotate')
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}


popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
}

