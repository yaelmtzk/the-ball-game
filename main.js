'use strict'

function onBallClick(elBall){

    var currWidth = parseInt(elBall.clientWidth)
    var currHeight = parseInt(elBall.clientWidth)

    var newWidth
    var newHeight

    if(currWidth < 400){
        var randDiam = getRandIntInclusive(20, 60)

        if (currWidth + randDiam > 400) randDiam = 400 - currWidth

        newWidth = currWidth + randDiam
        newHeight = currHeight + randDiam
    }
    else{
        newWidth = 100
        newHeight = 100
    }

    elBall.style.width = newWidth + 'px'
    elBall.style.height = newHeight + 'px'

    elBall.innerText = newWidth
}