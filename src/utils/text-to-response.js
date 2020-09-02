const fetch = require('node-fetch');

/**
 * @param {string} utterance - the message that Wit.ai handles
 */
const textToResponse = async (utterance) => {
    const url = 'https://api.wit.ai/message?v=20200830&q=' + encodeURI(utterance);
    const headers = new fetch.Headers({
        Authorization: 'Bearer ' + process.env.REACT_APP_WITAI_BEARER_TOKEN
    })

    const options = {
        headers
    }

    const response = await fetch(url, options)
    const responseJSON = await response.text()

    return responseJSON;
};

module.exports = textToResponse;
