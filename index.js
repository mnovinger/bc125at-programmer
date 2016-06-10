var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/cu.usbmodem0001", {
  baudrate: 9600
});

var modelCmd = 'MDL';
var enterPrg = 'PRG';
var exitPrg = 'EPG';

serialPort.on("open", function () {
  console.log('Opened Serial Port');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  serialPort.write(modelCmd+"\r", function(err, results) {
    if (err) {
      console.log(err);
    }
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    console.log('results ' + results);
  });

  serialPort.write(modelCmd, function(err, results) {
    if (err) {
      console.log(err);
    }
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    console.log('results ' + results);
  });
});
