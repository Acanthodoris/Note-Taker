const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./Routes/index.js');

const PORT = process.env.port || 3000;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
    console.log("test")
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
