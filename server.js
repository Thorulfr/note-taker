// Imports
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Server bits and bobs
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Enable and prefix routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Boot server
app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});
