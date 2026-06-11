// this is not a production file

// this file is only used so i can test this locally
//  on github codespaces

// the website itself is backendless, so you can ignore this file <3

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use('/pages', express.static('pages'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/win.mggu', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/transicle/MGGU-LLM-NoCode-Prompt/refs/heads/main/tools/mggu.ps1');
});

app.get('/unix.mggu', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/transicle/MGGU-LLM-NoCode-Prompt/refs/heads/main/tools/mggu.sh');
});

app.get('/88x31', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/88x31/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});