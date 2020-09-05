const fetch = require('node-fetch');
const jszip = require('jszip');

const voiceToResponse = async (zip) => {
    // get recording from zip file
    const loadAsync = await jszip.loadAsync(zip);
    const recording = await loadAsync.files['recording.mp3'].async('nodebuffer');

    // building request
    const url = 'https://api.wit.ai/speech'
    const headers = new fetch.Headers({
        Authorization: 'Bearer ' + process.env.WITAI_TOKEN,
        'Content-Type': 'audio/mpeg3',
    })
    const options = {
        method:'POST',
        headers,
        body: recording
    }

    // sending request
    const response = await fetch(url, options)
    const responseJSON = await response.json()

    return responseJSON;
};

module.exports = voiceToResponse;