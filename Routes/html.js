// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.

// * `GET *` should return the `index.html` file.

const express = require('express');

const notesRouter = require('./html');
const indexRouter = require('*');


const app = express();

app.use('./notes', notesRouter);
app.use('*', indexRouter);


module.exports = app