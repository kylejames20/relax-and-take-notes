const fs = require('fs');

//POST handler for new note
const newNote = (req, res, next) => {
    console.log("POST");
}

const getNotes = (req, res, next) => {
    const db = fs.readFile('./db/db.json', function read (err, data) {
        if(err) {
            console.error('Unable to issue db.json');
        } else{
            const dbJSON = JSON.parse(data);
            res.send(dbJSON);
        }
    });
    const dbJSON = JSON.parse(db);
    res.send(dbJSON);
}

module.exports = {newNote, getNotes};