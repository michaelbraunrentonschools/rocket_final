enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function countdown() {
    for (let index = 10; index > -1; index--) {
        Rocketship.say("T-Minus " + index + "Seconds")
        pause(1000)
    }
    Rocketship.setImage(img`
    . . . . . . . f f . . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . f 8 8 f . . . . . .
    . . . . . . f 6 6 f . . . . . .
    . . . . . . f 9 9 f . . . . . .
    . . . . . f 9 f f 9 f . . . . .
    . . . . f 9 f 5 5 f 9 f . . . .
    . . . . f f 4 5 5 4 f f . . . .
    . . . f 9 f 5 4 4 5 f 9 f . . .
    . . f 9 6 f 4 5 5 4 f 6 9 f . .
    . . f 9 6 6 f f f f 6 6 9 f . .
    . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
    . f 9 6 8 f f f f f f 8 6 9 f .
    f 9 6 8 f . 2 4 5 2 . f 8 6 9 f
    f f f f . . . 2 4 2 . . f f f f
    . . . . . . . . 2 . . . . . . .
`)
    Rocketship.say("")
    Idle = animation.createAnimation(ActionKind.Idle, 20)
    animation.attachAnimation(Rocketship, Idle)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 4 5 2 . f 8 6 9 f
        f f f f . . . 2 4 2 . . f f f f
        . . . . . . . 2 2 . . . . . . .
    `)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 5 4 2 . f 8 6 9 f
        f f f f . . 2 4 2 . . . f f f f
        . . . . . . . 2 2 . . . . . . .
    `)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 5 4 2 . f 8 6 9 f
        f f f f . . 2 4 2 . . . f f f f
        . . . . . . . 2 . . . . . . . .
    `)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 5 4 2 . f 8 6 9 f
        f f f f . . 2 4 2 . . . f f f f
        . . . . . . . 2 2 . . . . . . .
    `)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 4 5 2 . f 8 6 9 f
        f f f f . . . 2 4 2 . . f f f f
        . . . . . . . 2 2 . . . . . . .
    `)
    Idle.addAnimationFrame(img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 8 8 f . . . . . .
        . . . . . . f 6 6 f . . . . . .
        . . . . . . f 9 9 f . . . . . .
        . . . . . f 9 f f 9 f . . . . .
        . . . . f 9 f 5 5 f 9 f . . . .
        . . . . f f 4 5 5 4 f f . . . .
        . . . f 9 f 5 4 4 5 f 9 f . . .
        . . f 9 6 f 4 5 5 4 f 6 9 f . .
        . . f 9 6 6 f f f f 6 6 9 f . .
        . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
        . f 9 6 8 f f f f f f 8 6 9 f .
        f 9 6 8 f . 2 4 5 2 . f 8 6 9 f
        f f f f . . . 2 4 2 . . f f f f
        . . . . . . . . 2 . . . . . . .
    `)
    animation.setAction(Rocketship, ActionKind.Idle)
}
function blastOff() {
    for (let i = 0; i < 25; i++) {
        pause(50)
        Rocketship.y += -5
        Rocketship.startEffect(effects.fire, 75)
    }
}
let Idle: animation.Animation = null
let Rocketship: Sprite = null
Rocketship = sprites.create(img`
    . . . . . . . f f . . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . f 8 8 f . . . . . .
    . . . . . . f 6 6 f . . . . . .
    . . . . . . f 9 9 f . . . . . .
    . . . . . f 9 f f 9 f . . . . .
    . . . . f 9 f 5 5 f 9 f . . . .
    . . . . f f 4 5 5 4 f f . . . .
    . . . f 9 f 5 4 4 5 f 9 f . . .
    . . f 9 6 f 4 5 5 4 f 6 9 f . .
    . . f 9 6 6 f f f f 6 6 9 f . .
    . f 9 6 8 8 6 6 6 6 8 8 6 9 f .
    . f 9 6 8 f f f f f f 8 6 9 f .
    f 9 6 8 f . . . . . . f 8 6 9 f
    f f f f . . . . . . . . f f f f
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
Rocketship.setPosition(80, 110)
countdown()
blastOff()
