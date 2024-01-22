input.onButtonPressed(Button.A, function () {
    basic.showString("FERNANDA")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.showString("FERNANDA")
    basic.showIcon(IconNames.Happy)
})
