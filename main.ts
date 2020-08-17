input.onButtonPressed(Button.A, function () {
    Temp = input.temperature()
    basic.showString("TEMP:")
    basic.showNumber(Temp)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("HOLA!")
})
let Temp = 0
basic.showString("HOLA!")
basic.forever(function () {
	
})
