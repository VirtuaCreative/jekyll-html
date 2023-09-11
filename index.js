const express = require('express');
const app = express();
const path = require('path');

express.static(path.join(__dirname, '/_site'));

// Uncomment for local development
// app.listen(8080, () => {
// 	console.log('Jekyll Static Site listening on port http://localhost:8080');
// });
