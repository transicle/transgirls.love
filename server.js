// this is not a production file

// this file is only used so i can test this locally
//  on github codespaces

// the website itself is backendless, so you can ignore this file <3

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});