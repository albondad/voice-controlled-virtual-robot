const sendRecording = async (recording) => {
    console.log(recording)
    const url = 'http://localhost:3000'
    
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/zip",
        },
        body: recording
    }

    const response = await fetch(url, options)
    const responseJSON = await response.json()

    console.log(responseJSON)
    return responseJSON;
};

export default sendRecording;