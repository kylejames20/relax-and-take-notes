const res = require('express/lib/response');

const note = require('express').Router();

note.get('/', (req, res) => {
    console.log('path');
});

note.post('/', )

module.exports = note;