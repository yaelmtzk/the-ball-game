'use strict'

function onBallClick(elBall){

    var currWidth = parseInt(elBall.clientWidth)
    var currHeight = parseInt(elBall.clientWidth)

    var newWidth = currWidth + 50
    var newHeight = currHeight + 50

    elBall.style.width = newWidth + 'px'
    elBall.style.height = newHeight + 'px'

    elBall.innerText = newWidth
}