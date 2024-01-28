import state from "./state.js"
import * as element from "./elements.js"
import * as actions from "./actionsControls.js"

export function countdown(){

    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        actions.stop()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => {countdown()}, 1000)
}

export function plusMinutes(){
    let minutes = Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)
    minutes <= 60 ? minutes+= 5 : minutes
    minutes <= 60 ? minutes : minutes = 60
    updateDisplay(minutes, seconds)
}

export function minusMinutes(){ 
    let minutes = Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)
    minutes >= 5 ? minutes-=5 : minutes
    updateDisplay(minutes, seconds)
}



export function updateDisplay(minutes, seconds){ 
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    element.minutes.textContent = String(minutes).padStart(2,'0')
    element.seconds.textContent = String(seconds).padStart(2,'0')
    
}