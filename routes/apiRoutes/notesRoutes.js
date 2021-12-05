// Imports
const router = require('express').Router();
const { notes } = require('../../db/db.json');

// Route for getting notes
router.get('/', (req, res) => {
    let results = notes;
});

module.exports = router;
