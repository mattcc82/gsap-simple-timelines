// dom ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('dom ready')
    startTween()
})

// window resize
window.addEventListener('resize', function () {
    startTween()
})

// cheat sheet
// Create a tween
// var tween = TweenLite.to($box, 2, {
//     x: 100,
//     ease: Power1.easeInOut,
//     delay: 2,
//     onComplete: myFunction,
//     onCompleteParams: [element, 'param2']
// })

const startTween = function () {
    let icon = document.querySelector('figure')
    let fromCol = document.querySelector('.from-col')
    let toCol = document.querySelector('.to-col')
    let d = 1
    let iconTween = TweenLite.to(
        icon, // element
        2, // time seconds
        {
            x: toCol.offsetLeft,
            rotation: 540,
            opacity: 1,
            scale: .33,
            onComplete: revertTween, // callback on complete
            onCompleteParams: [icon, fromCol, toCol, d] // params to be sent to callback
        } // object of properties
    )
    let columnTextTween = TweenLite.to(
        toCol.children[0],
        2,
        {
            delay: d - .25,
            color: '#ff0080',
            fontSize: '5rem',
            onComplete: revertTween
        }
    )
}

const revertTween = function (tween, fromCol, toCol, d) {
    if (tween) {
        let iconRevert = TweenLite.to(
            tween,
            2,
            {
                delay: d,
                x: fromCol.offsetLeft,
                rotation: -540,
                opacity: .33,
                scale: 1
            }
        )
        let columnTextRevert = TweenLite.to(
            toCol.children[0],
            2,
            {
                color: '#363636',
                fontSize: '2rem'
            }
        )
    }
}