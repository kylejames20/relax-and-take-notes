const notesController = require('../controllers/notes'); 
const note = require('express').Router();

note.get('/', notesController.getNotes);

note.post('/', notesController.newNote)

module.exports = note;