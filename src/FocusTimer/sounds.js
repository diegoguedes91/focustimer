import { forestElement, rainElement, coffeeShopElement, firePlaceElement } from "./elements.js"
import { buttonPressForest, buttonPressRain, buttonPressCoffeeShop, buttonPressFirePlace } from "./audio.js" 

export function forestSound(){
    if(!forestElement.classList.contains('selected')){
        selected(rainElement, coffeeShopElement, firePlaceElement, buttonPressRain, buttonPressCoffeeShop, buttonPressFirePlace)
        forestElement.classList.add('selected')
        buttonPressForest.play()
        return
    }
    forestElement.classList.remove('selected')
    buttonPressForest.pause()
}

export function rainSound(){
    if(!rainElement.classList.contains('selected')){
        selected(forestElement, coffeeShopElement, firePlaceElement, buttonPressForest, buttonPressCoffeeShop, buttonPressFirePlace)
        rainElement.classList.add('selected')
        buttonPressRain.play()
        return
    }
    rainElement.classList.remove('selected')
    buttonPressRain.pause()
}

export function cofeeShopSound(){
    if(!coffeeShopElement.classList.contains('selected')){
        selected(forestElement, rainElement, firePlaceElement, buttonPressForest, buttonPressRain, buttonPressFirePlace)
        coffeeShopElement.classList.add('selected')
        buttonPressCoffeeShop.play()
        return
    }
    coffeeShopElement.classList.remove('selected')
    buttonPressCoffeeShop.pause()
}

export function firePlaceSound(){
    if(!firePlaceElement.classList.contains('selected')){
        selected(forestElement, rainElement, coffeeShopElement, buttonPressForest, buttonPressRain, buttonPressCoffeeShop)
        firePlaceElement.classList.add('selected')
        buttonPressFirePlace.play()
        return
    }
    firePlaceElement.classList.remove('selected')
    buttonPressFirePlace.pause()
}


function selected(elmentOne, elementTwo, elementThree, audioOne, audioTwo, audioThree){
    elmentOne.classList.remove('selected')
    elementTwo.classList.remove('selected')
    elementThree.classList.remove('selected')
    audioOne.pause()
    audioTwo.pause()
    audioThree.pause()
}