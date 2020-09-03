const fetch = require('node-fetch');

const voiceToResponse = async (body) => {
    const url = 'https://api.wit.ai/speech'
    const headers = new fetch.Headers({
        Authorization: 'Bearer ' + process.env.WITAI_TOKEN,
        'Content-Type': 'audio/mpeg3',
    })

    const options = {
        method:'POST',
        headers,
        body: body
    }

    const response = await fetch(url, options)
    const responseJSON = await response.json()
    console.log(responseJSON);

    return responseJSON;
};

module.exports = voiceToResponse;
