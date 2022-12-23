 //Dom
 //Documento Object Model

 //variáveis
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//resetar o controles. acabou , reseta.
function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')

  }

  //atualização do display timer
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  //quando pausar , quero que resete
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      
    updateTimerDisplay(minutes, 0)
      
      //quando os minutos e os segundos for menor igual a zero ele tem que parar
      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        kitchenTimer.play()
        return
      }
      
      //quando acabar o tempo o cronometro tem que voltar a 60 minutos.
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))
    
      //vai rodar a função novamente, ou seja a cada 1000 mili segundos ele diminui 1 minuto
      countdown()
    }, 1000)
  }
  
 
// Event-driven
// callback(function())
//aparecer um botão e sumir o outro
  buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
  buttonPressAudio.play()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  buttonPressAudio.play()
})

buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
    buttonPressAudio.play()
})
  
buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    bgAudio.play()
})
  
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    bgAudio.pause()
})

  //criar uma janela perguntando quantos minutos
buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?') || 0
    updateTimerDisplay(minutes, 0)
  })

  //sons
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  //função para os sons
  //som para o pause, play e stop
  function pressButton() {
    buttonPressAudio.play()
  }

  //som quando acabar o cronometro
  function timeEnd() {
    kitchenTimer.play()
  }

  //obs: o bgAudio é um objeto , então não precisa criar função para ele, é só colocar direto onde quer o som
  

  