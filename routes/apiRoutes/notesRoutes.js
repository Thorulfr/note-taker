// Imports
const router = require('express').Router();
const notes = require('../../data/db');
const { nanoid } = require('nanoid');
const { createNewNote, deleteNote } = require('../../lib/notes');

// Get all notes
router.get('/', (req, res) => {
    let results = notes;
    res.json(results);
});

// Add new note
router.post('/', (req, res) => {
    // Set ID based on what next index of the array will bear
    req.body.id = nanoid();
    // Add note to JSON file
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// Delete a note
router.delete('/:id', (req, res) => {
    deleteNote(req.params, notes);
    res.json();
});

module.exports = router;
