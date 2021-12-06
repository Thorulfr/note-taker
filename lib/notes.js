// Imports
const fs = require('fs');
const path = require('path');
// const { nanoid } = require('nanoid');

// Create a new note using incoming data
function createNewNote(body, notesArray) {
    const note = body;
    // note.id = nanoid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    // Return finished code to post route for response
    return note;
}

// Find and delete a note by using ID
function deleteNote() {}

module.exports = { createNewNote };
