import {
    TOGGLE_RECORDING
} from './actions' 
import Microm from 'microm';
import sendRecording from '../utils/send-recording';
import jszip from 'jszip';

console.log(new Microm());

const initialState = {
    //mediaRecorder: initializeMediaRecorder(),
    recording: false
};

const microm = new Microm();

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RECORDING:
            if (state.recording) {
                //await state.mediaRecorder.stop();
                //state.mediaRecorder.then(response => response.stop());
                microm.stop().then(response => {
                    const zip = new jszip()
                    zip.file('recording.mp3', response.blob);
                    zip.generateAsync({type: 'blob'})
                        .then(response => {
                            sendRecording(response);
                            //fileSaver(response, 'package.zip')
                        })
                    //fileSaver(response.blob, 'hello.mp3')
                    //sendRecording(response.blob)
                    //microm.download('thisisanaudio');
                    //microm.play();
                })
            }
            else {
                //await state.mediaRecorder.start();
                //state.mediaRecorder.then(response => response.start());
                microm.record()
                    .then(response => {
                        console.log('recording');
                    })
                    .catch(response => {
                        console.log('recording error')
                    });

            }
            return {
                ...state,
                recording: !state.recording
            }
        default:
            return state;
    }
}