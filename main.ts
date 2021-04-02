// Variable A=1, if the A button is pressed
input.onButtonPressed(Button.A, function () {
    A = 1
})
// Variable A=2, if the B button is pressed
input.onButtonPressed(Button.B, function () {
    A = 2
})
let A = 0
A = 0
basic.forever(function () {
    if (A == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (A == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
