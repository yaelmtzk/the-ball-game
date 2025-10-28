'use strict'

function onBallClick(elBall){

    var currWidth = parseInt(elBall.clientWidth)
    var currHeight = parseInt(elBall.clientWidth)

    var newWidth
    var newHeight

    if(currWidth < 400){
        newWidth = currWidth + 50
        newHeight = currHeight + 50
    }
    else{
        newWidth = 100
        newHeight = 100
    }

    elBall.style.width = newWidth + 'px'
    elBall.style.height = newHeight + 'px'

    elBall.innerText = newWidth
}