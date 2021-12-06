// Imports
const fs = require('fs');
const path = require('path');
const notes = require('../data/db.json');

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
function deleteNote(note) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return;
}

module.exports = { createNewNote, deleteNote };
