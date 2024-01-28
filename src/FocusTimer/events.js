import { controls, sounds } from "./elements.js"
import * as actionsControls from "./actionsControls.js"
import * as actionSounds from "./actionsSounds.js"

export function registerControls(){ 
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actionsControls[action] != "function"){
            return
        }
        actionsControls[action]()
    })
}

export function registerSounds(){
    sounds.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actionSounds[action] != "function"){
            return
        }
        actionSounds[action]()
    })
}