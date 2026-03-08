namespace SpriteKind {
    export const comida = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MY_sprint.vy == 0) {
        MY_sprint.vy = -150
    }
    animation.runImageAnimation(
    MY_sprint,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f f f . . . . 
        . . . . . f f f . . . f . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.comida, function (sprite, otherSprite) {
    bicho = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bicho,
    [img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 f f f f f f 
        f f f f f f f f f 2 2 2 f f f f 
        f f f f f f f f f 2 2 2 2 f f f 
        f f f f f f f f f f 2 2 2 2 2 f 
        f f f f f f f f f f 2 2 2 2 2 2 
        f f f f f f f f f f f 2 2 2 2 2 
        f f f f f f f f f f f f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `],
    50,
    true
    )
    sprites.destroy(otherSprite)
    bicho.setPosition(MY_sprint.x + -40, MY_sprint.y - 10)
    bicho.follow(MY_sprint, 95)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    MY_sprint,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MY_sprint,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . f f f . . f . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    MY_sprint,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
let bicho: Sprite = null
let comida_do_bicho: Sprite = null
let MY_sprint: Sprite = null
scene.setBackgroundColor(4)
MY_sprint = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(MY_sprint, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
MY_sprint.ay = 350
scene.cameraFollowSprite(MY_sprint)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    comida_do_bicho = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . d d d . . . . . . . . . . 
        . . . d d d . . . . . . . . . . 
        . d d d d d . . . . . . . . . . 
        . d d d d d d . . . . . . . . . 
        . d d d d d d d . . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . d d d d d . . . . 
        . . . . . . . . d d d d d d d . 
        . . . . . . . . . d d d d d d . 
        . . . . . . . . . . d d d d d . 
        . . . . . . . . . . d d d . . . 
        . . . . . . . . . . d d d . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.comida)
    tiles.placeOnTile(comida_do_bicho, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
