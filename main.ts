radio.onReceivedNumber(function (receivedNumber) {
    datalogger.log(datalogger.createCV("id", receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(control.deviceSerialNumber())
    radio.sendString("teste, teste, teste")
    radio.sendString("Deu certo?")
})
radio.onReceivedString(function (receivedString) {
    datalogger.log(datalogger.createCV("mensagem", receivedString))
})
radio.setGroup(7)
basic.forever(function () {
	
})
