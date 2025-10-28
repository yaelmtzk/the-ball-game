'use strict'

function onBallClick(elBall, maxDiameter){

    var currWidth = parseInt(elBall.clientWidth)
    var currHeight = parseInt(elBall.clientWidth)

    var newWidth
    var newHeight

    if (currWidth === maxDiameter) {
        newWidth = 100
        newHeight = 100
    }

    else if(currWidth < maxDiameter){
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

function changeBallColor(elBall){
    elBall.style.backgroundColor = getRandomColor()
}

function onBall3Click(){

    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    console.log(currSize1);

    var currSize1 = parseInt(elBall1.clientWidth)
    var currSize2 = parseInt(elBall2.clientWidth)

    elBall1.style.width = currSize2 + 'px'
    elBall1.style.height = currSize2 + 'px'

    elBall2.style.width = currSize1 + 'px'
    elBall2.style.height = currSize1 + 'px'

    elBall1.innerText = currSize2
    elBall2.innerText = currSize1

    var currBackColor1 = getComputedStyle(elBall1).backgroundColor
    var currBackColor2 = getComputedStyle(elBall2).backgroundColor

    elBall1.style.backgroundColor = currBackColor2
    elBall2.style.backgroundColor = currBackColor1
}