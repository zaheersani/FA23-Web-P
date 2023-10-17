const express = require('express');
const router = express.Router();

// Define a route within the router
router.get('/', (req, res) => {
    res.send('This is the main Doctors route.');
});

router.get('/about', (req, res) => {
    res.send('This is the Doctors about page.');
});

module.exports = router;