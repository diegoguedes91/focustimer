import * as timer from './timer.js'
import state from './state.js'

export function play(){
    state.isRunning = true
    timer.countdown()
}

export function stop(){
    state.isRunning = false
}

export function plus(){
    timer.plusMinutes()
}

export function minus(){
    timer.minusMinutes()
}