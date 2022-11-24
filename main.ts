input.onButtonPressed(Button.A, function () {
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("light", input.lightLevel())
    )
})
datalogger.deleteLog(datalogger.DeleteType.Full)
basic.forever(function () {
	
})
