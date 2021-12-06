// Imports
const fs = require('fs');
const path = require('path');

// Create a new note using incoming data
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    // Return finished code to post route for response
    return note;
}

// Find and delete a note by using ID
function deleteNote(noteId, notesArray) {
    notesArray.splice(noteId, 1);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return;
}

module.exports = { createNewNote, deleteNote };
