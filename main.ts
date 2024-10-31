namespace SpriteKind {
    export const skattekiste = SpriteKind.create()
    export const opgave1 = SpriteKind.create()
    export const opgave2 = SpriteKind.create()
    export const opgave3 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Frynsevinge,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c f f . 
        . f f c c c c c c c c f f . 
        . f f c c c c c c f f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . . e f f f f f f f f 4 e . 
        . . 4 f 3 3 3 3 3 e d d 4 . 
        . . e f f f f f f e e 4 . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f f c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f f c c c c c c f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f e . . 
        . 4 d d e 3 3 3 3 3 f 4 . . 
        . . 4 e e f f f f f f e . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.opgave3, function (sprite, otherSprite) {
    game.showLongText("Nu venter tredje opgave! løs gåden og kom tættere på udgangen.", DialogLayout.Bottom)
    game.showLongText("Her er gåden", DialogLayout.Bottom)
    if (game.askForNumber("Hvor mange fingre er der på en hånd", 1) == 5) {
        game.showLongText("Godt klaret, find nøglen og lås kisten op med tallene fra de tre gåder", DialogLayout.Bottom)
    } else {
        game.showLongText("Forkert, start forfra", DialogLayout.Bottom)
        game.reset()
    }
    otherSprite.setKind(SpriteKind.Player)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Frynsevinge,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.opgave1, function (sprite, otherSprite) {
    game.showLongText("Nu venter første opgave! løs gåden og kom tættere på udgangen.", DialogLayout.Bottom)
    game.showLongText("Her er gåden", DialogLayout.Bottom)
    if (game.askForNumber("hvilket semester er vi i gang med", 1) == 1) {
        game.showLongText("Godt klaret, find hjertet.", DialogLayout.Bottom)
    } else {
        game.showLongText("Forkert, start forfra", DialogLayout.Bottom)
        game.reset()
    }
    otherSprite.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.opgave2, function (sprite, otherSprite) {
    game.showLongText("Nu venter anden opgave! løs gåden og kom tættere på udgangen.", DialogLayout.Bottom)
    game.showLongText("Her er gåden", DialogLayout.Bottom)
    if (game.askForNumber("Hvor mange liv har en kat", 1) == 9) {
        game.showLongText("Godt klaret, find guldfisken.", DialogLayout.Bottom)
    } else {
        game.showLongText("Forkert, start forfra", DialogLayout.Bottom)
        game.reset()
    }
    otherSprite.setKind(SpriteKind.Player)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Frynsevinge,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Frynsevinge,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.skattekiste, function (sprite, otherSprite) {
    game.showLongText("indtast kode", DialogLayout.Bottom)
    if (game.askForNumber("", 3) == 195) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.setGameOverMessage(false, "GAME OVER!")
        game.gameOver(false)
        game.reset()
    }
})
let Frynsevinge: Sprite = null
game.showLongText("Velkommen til skattejagt.", DialogLayout.Bottom)
game.showLongText("Du får ved hvert object et svar du skal huske på. Gå til ildkuglen.", DialogLayout.Bottom)
Frynsevinge = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
let skat = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................55555...........
    ................5...............
    ................5...............
    ................5...............
    ................5...............
    ................5555............
    ................5...............
    ................5...............
    ................5...............
    ................5...............
    ................5...............
    ................5...............
    ..........5555555555555.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5...........5.........
    ..........5555555555555.........
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.skattekiste)
controller.moveSprite(Frynsevinge)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(Frynsevinge)
tiles.placeOnTile(Frynsevinge, tiles.getTileLocation(15, 0))
tiles.placeOnTile(skat, tiles.getTileLocation(12, 11))
let gåder = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
    . . 4 d 5 d 5 5 5 d d d 4 4 . . 
    . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
    . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
    . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
    . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
    . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
    . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
    . . 2 4 d d 5 5 5 5 d d 5 4 . . 
    . . . 2 2 4 d 5 5 d d 4 4 . . . 
    . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
    . . . 2 2 4 4 4 4 4 4 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.opgave1)
tiles.placeOnTile(gåder, tiles.getTileLocation(12, 1))
let gåder2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . f f f f f f . 
    . f f 3 3 3 3 f f f 3 3 3 3 f f 
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
    . f 3 3 3 3 b b b b b 3 3 3 3 f 
    . f f 3 3 b b b b b b b 3 3 f f 
    . . f f 3 b b b b b b b 3 f f . 
    . . . f f b b b b b b b f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.opgave2)
tiles.placeOnTile(gåder2, tiles.getTileLocation(3, 7))
let gåder3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.opgave3)
tiles.placeOnTile(gåder3, tiles.getTileLocation(2, 11))
