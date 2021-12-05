// Imports
const router = require('express').Router();
const notesRoutes = require('./notesRoutes');

// Prepend 'notes' to notes routes
router.use('./notes', notesRoutes);

module.exports = router;
