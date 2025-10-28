'use strict'

function onBallClick(elBall, maxSize){

    changeBallSize(elBall, maxSize)

    changeBallColor(elBall)
}

function changeBallSize(elBall, maxDiameter){

    var currWidth = parseInt(elBall.clientWidth)
    var currHeight = parseInt(elBall.clientWidth)

    var newWidth
    var newHeight

    if(currWidth < maxDiameter){
        var randDiam = getRandIntInclusive(20, 60)

        if (currWidth + randDiam > maxDiameter) randDiam = maxDiameter - currWidth

        newWidth = currWidth + randDiam
        newHeight = currHeight + randDiam
    }

    if(newWidth >= maxDiameter){
        newWidth = 100
        newHeight = 100
    }

    elBall.style.width = newWidth + 'px'
    elBall.style.height = newHeight + 'px'

    elBall.innerText = newWidth
}

    elBall.style.backgroundColor = getRandomColor()
}