// dom ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('dom ready')
    init()
})
// window resize
window.addEventListener('resize', function () {
    console.log('window resized')
})
// btn elements
let playBtn = document.getElementById('play-btn')
let pauseBtn = document.getElementById('pause-btn')
let stopBtn = document.getElementById('stop-btn')
let reverseBtn = document.getElementById('reverse-btn')

const init = function () {
    // new timeline
    let iconTimeline = new TimelineMax({
        paused: true
    })
    let titleTimeline = new TimelineMax({
        onComplete: function () {
            iconTimeline.play()
        }
    })
    // btn event listeners
    playBtn.addEventListener('click', function () {
        iconTimeline.play()
    })
    pauseBtn.addEventListener('click', function () {
        iconTimeline.pause()
    })
    stopBtn.addEventListener('click', function () {
        iconTimeline.stop()
    })
    reverseBtn.addEventListener('click', function () {
        iconTimeline.reverse()
    })

    // dom elements to animate
    let title = document.querySelector('.hero-body .title')
    let levelBoxes = document.querySelectorAll('div[class="level"] .level-item')
    let icon1 = document.getElementById('icon1')
    let icon2 = document.getElementById('icon2')
    let icon3 = document.getElementById('icon3')
    let icon4 = document.getElementById('icon4')

    let duration = 1

    // title animation
    titleTimeline.from(title, duration, { y: -500, scale: 2, ease: Bounce.easeOut })
    titleTimeline.staggerFrom('a', duration - .75, { opacity: 0, x: -400, scale: .25, ease: Elastic.easeOut }, .25, .75)

    iconTimeline.to(
        icon1,
        duration, {
            y: 200,
            opacity: 0,
            rotation: 540,
            ease: Power4.easeInOut
        }
    ).to(levelBoxes[0], duration, { backgroundColor: '#FFA500'}, 0)
    iconTimeline.to(
        icon2,
        duration, {
            y: 200,
            opacity: 0,
            rotationY: 360,
            ease: Bounce.easeInOut
        }
    ).to(levelBoxes[1], duration, { backgroundColor: '#FFA500' }, 1)
    iconTimeline.to(
        icon3,
        duration, {
            y: 200,
            opacity: 0,
            rotationX: 360,
            ease: Circ.easeInOut
        }
    ).to(levelBoxes[2], duration, { backgroundColor: '#FFA500' }, 2)
    iconTimeline.to(
        icon4,
        duration, {
            y: 200,
            opacity: 0,
            rotationX: 360,
            rotationY: 360,
            rotation: -540,
            ease: Back.easeInOut
        }
    ).to(levelBoxes[3], duration, { backgroundColor: '#FFA500' }, 3)
}