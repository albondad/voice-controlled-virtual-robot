const fetch = require('node-fetch');

/**
 * @param {string} utterance - the message that Wit.ai handles
 */
const voiceToResponse = async (body) => {
    const url = 'https://api.wit.ai/speech'
    const headers = new fetch.Headers({
        Authorization: 'Bearer V6ODPPQYLFVBDXH5VYXE5G2BBABXGLVW',
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
