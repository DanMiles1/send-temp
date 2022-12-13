input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temp2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        temp2 = value
    }
})
let temp2 = 0
basic.clearScreen()
radio.setGroup(2)
loops.everyInterval(60000, function () {
    radio.sendValue("temp", input.temperature())
})
