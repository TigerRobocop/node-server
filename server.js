const http = require('http');
const port = 3000;
const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter');
let received = [];

let serialPort = new SerialPort('/dev/cu.usbmodem14201', {
	baudRate: 9600
});

const parser = serialPort.pipe(new Delimiter({delimiter: '\n'}));

parser.on('data', (buffer) => {
	const bufferReceived = buffer.toString('utf8');
	received.push(bufferReceived);

	console.log('Received: ', buffer);
});

const sendBySerial = (data) => {
	serialPort.write(data, (err, result) => {
		if (err) {
			console.log('Error sending');
		}
	})
}

const requestHandler = (request, response) => {
	console.log(request.url);

	if (request.url.includes('favicon')) {

	} else {
		if (request.url.includes('liga')) {
			response.end('LIGA');
			sendBySerial('L');
		} else if (request.url.includes('received')){
			response.end(received.join(', '));
		} else {
			response.end('DESLIGA');
			sendBySerial('D');
		}
	}
}


const server = http.createServer(requestHandler);


server.listen(port, (err) => {
	if (err) {
		console.log("Error: " + err);
	}
	console.log(`Server running on port ${port}`);
});