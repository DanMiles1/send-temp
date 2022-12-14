input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temp2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        temp2 = value
        datalogger.log(datalogger.createCV("inside", input.temperature()))
        datalogger.log(datalogger.createCV("outside", temp2))
    }
})
let temp2 = 0
basic.clearScreen()
radio.setTransmitPower(7)
radio.setGroup(2)
datalogger.setColumnTitles(
"inside",
"outside"
)
loops.everyInterval(60000, function () {
    radio.sendValue("temp", input.temperature())
})
