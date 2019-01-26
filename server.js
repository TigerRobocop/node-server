const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
	response.end('OK');
	// if (!request.url.includes('favicon')) {
	// 	console.log()
	// }
}


const server = http.createServer(requestHandler);


server.listen(port, (err) => {
	if (err) {
		console.log("Error: " + err);
	}

	console.log(`Server running on port ${port}`);

	
});