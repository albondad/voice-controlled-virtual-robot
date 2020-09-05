const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const cors = require('cors');
const getMeaning = require('../utils/get-meaning');

// middleware
app.use(cors());
app.use(express.raw({ type: 'application/zip' }));

// handling request
app.post('/', async (req, res) => {
    console.log('[VCVR] request recieved');
    const response = await getMeaning(req.body);
    res.send({ response });
});

// sets app to listen at certain port
app.listen(port, () => {
    console.log('[VCVR] express app listening at ' + port)
})