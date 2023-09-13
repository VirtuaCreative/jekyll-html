const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

// Uncomment for local development
// app.listen(8080, () => {
// 	console.log(`Jekyll Static Site listening on port 8080!`);
// });
