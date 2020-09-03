const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const cors = require('cors');
const voiceToResponse = require('../utils/voice-to-response');
const fs = require('fs');
const jszip = require('jszip');

app.use(cors());
app.use(express.raw({
    type: 'application/zip'
}));

app.post('/', async (req, res) => {
    console.log('[VCVR] request recieved');
    
    //console.log(req.body)
    const zip = req.body;
    const loadAsync = await jszip.loadAsync(zip);
    const recording = await loadAsync.files['recording.mp3'].async('nodebuffer');
    console.log(recording);

    const response = await voiceToResponse(recording);

    res.send({ response });
});

app.listen(port, () => {
    console.log('[VCVR] express app listening at ' + port)
})