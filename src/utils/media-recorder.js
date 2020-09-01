const initializeMediaRecorder = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
    })

    mediaRecorder.addEventListener("stop", event => {
        const audioBlob = new Blob(audioChunks);
        audioChunks.length = 0;
        const audioURL = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioURL);
        audio.play();
    })

    return mediaRecorder;
}

export default initializeMediaRecorder;

// let mediaRecorder = null;
// const audioChunks = [];

// navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(stream => {
//         mediaRecorder = new MediaRecorder(stream);

//         mediaRecorder.addEventListener("dataavailable", event => {
//             audioChunks.push(event.data);
//         })

//         mediaRecorder.addEventListener("stop", event => {
//             const audioBlob = new Blob(audioChunks);
//             const audioURL = URL.createObjectURL(audioBlob);
//             const audio = new Audio(audioURL);
//             audio.play();
//         })

//     })
//     .catch(error => {
//         //export default mediaRecorder;
//     });

    
// export default mediaRecorder;
