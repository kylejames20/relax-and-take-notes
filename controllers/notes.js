const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// allows you to open db for get or post
const db = fs.readFileSync("./db/db.json", "utf8");
const dbJSON = JSON.parse(db);

// allows you to write file handler
const writer = (newNotes) => {
  fs.writeFile("./db/db.json", newNotes, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.info("Database file updated");
  });
};

// allows you to create new note
const newNote = (req, res, next) => {
  const note = req.body;
  note.id = uuidv4();
  dbJSON.push(note);
  const newNotes = JSON.stringify(dbJSON);
  writer(newNotes);
};

// allows you to return note
const getNotes = (req, res, next) => {
  res.send(dbJSON);
};

// allows you to delete note
const deleteNote = (req, res, next) => {
  const noteID = req.params.id;
  const noteIndex = dbJSON.findIndex((x) => x.id === noteID);
  if (noteIndex > -1) {
    dbJSON.splice(noteIndex, 1);
    writer(JSON.stringify(dbJSON));
  }
};

module.exports = { newNote, getNotes, deleteNote };
