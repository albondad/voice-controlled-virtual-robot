import {
    START_RECORDING,
    STOP_RECORDING,
    TOGGLE_RECORDING
} from './actions' 
import initializeMediaRecorder from '../utils/media-recorder';
console.log(initializeMediaRecorder);

const initialState = {
    mediaRecorder: initializeMediaRecorder(),
    recording: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_RECORDING:
            console.log('start recording')
            return {
                ...state,
                recording: true
            }
        case STOP_RECORDING:
            console.log('start recording')
            return {
                ...state,
                recording: true
            }
        case TOGGLE_RECORDING:
            if (state.recording) {
                //await state.mediaRecorder.stop();
                state.mediaRecorder.then(response => response.stop());
            }
            else {
                 //await state.mediaRecorder.start();
                 state.mediaRecorder.then(response => response.start());

            }
            return {
                ...state,
                recording: !state.recording
            }
        default:
            return state;
    }
}

// const initializeMediaRecorder = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = mediaRecorder(stream);
//     const audioChunks = [];

//     mediaRecorder.addEventListener("dataavailable", event => {
//         audioChunks.push(event.data);
//     })

//     mediaRecorder.addEventListener("stop", event => {
//         const audioBlob = new Blob(audioChunks);
//         const audioURL = URL.createObjectURL(audioBlob);
//         const audio = new Audio(audioURL);
//         audio.play();
//     })

//     return mediaRecorder;
// }