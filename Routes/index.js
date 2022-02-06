const notes = require('express').Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helper/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;  

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.error('Error in adding your note');
  }
});

notes.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    if (req.body){
        readAndDelete(req.params.id, './db/db.json')
        res.send(true)
    }
  });

module.exports = notes;
