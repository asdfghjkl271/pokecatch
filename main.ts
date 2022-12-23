namespace SpriteKind {
    export const fire = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy()
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
game.splash("Being normal is mid")
game.splash("By colliding with the pikachu you get points")
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 9 9 9 9 f f . . . . 
    . . . f 6 6 6 9 9 1 1 9 f . . . 
    . . f 6 6 6 6 6 9 9 9 9 9 f . . 
    . . f 8 6 f f f f f f 9 9 f . . 
    . f 8 8 8 f a a 1 1 f 9 9 9 f . 
    . f f f f f a f f a f f f f f . 
    . f f f f f c f f a f f f f f . 
    . f 1 1 1 f c c a a f 1 1 1 f . 
    . . f 1 1 f f f f f f 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.startCountdown(45)
forever(function () {
	
})
forever(function () {
    mySprite2 = sprites.create(img`
        . . . f . . . . . . . . f . . . 
        . . f f f . . . . . . f f f . . 
        . . f f f . . . . . . f f f . . 
        . . f 5 f . . . . . . f 5 f . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
        . f 2 2 5 5 5 f f 5 5 5 2 2 f . 
        . f 2 2 5 5 5 5 5 5 5 5 2 2 f . 
        . f 5 5 5 5 f f f f 5 5 5 5 f . 
        . f 5 f 5 5 5 5 5 5 5 5 f 5 f . 
        . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
        . f e f 5 5 5 5 5 5 5 5 f e f . 
        . f 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        . f e 5 f 5 f 5 5 f 5 f 5 e f . 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.Food)
    mySprite2.x = randint(0, 80)
    mySprite2.y = randint(0, 80)
    pause(1500)
    mySprite2.destroy()
    pause(1000)
})
