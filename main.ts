radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        radio.sendString("eskuina")
    }
    if (input.acceleration(Dimension.X) < -200) {
        radio.sendString("ezkerra")
    }
    if (input.acceleration(Dimension.Y) > 200) {
        radio.sendString("aurrera")
    }
    if (input.acceleration(Dimension.Y) < -200) {
        radio.sendString("atzera")
    }
})
