function eskinterm2 () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("eskint")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("klaxona")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "eskuina") {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 150)
    }
    if (receivedString == "ezkerra") {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 150)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
    }
    if (receivedString == "aurrera") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 170)
    }
    if (receivedString == "atzera") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 150)
    }
    if (receivedString == "ezkint") {
        eskinterm()
    }
    if (receivedString == "eskint") {
        eskinterm2()
    }
    if (receivedString == "klaxona") {
        music.playMelody("C E G C E G - - ", 468)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ezkint")
})
function eskinterm () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    basic.pause(200)
}
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        radio.sendString("eskuina")
        basic.showArrow(ArrowNames.East)
    }
    if (input.acceleration(Dimension.X) < -200) {
        radio.sendString("ezkerra")
        basic.showArrow(ArrowNames.West)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        radio.sendString("aurrera")
        basic.showArrow(ArrowNames.North)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        radio.sendString("atzera")
        basic.showArrow(ArrowNames.South)
    }
})
