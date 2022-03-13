const notesController = require('../controllers/notes'); 
const note = require('express').Router();

note.get('/', notesController.getNotes);

note.post('/', notesController.newNote)

note.delete('/:id', notesController.deleteNote);

module.exports = note;