import { TOGGLE_RECORDING } from './actions' 
import Microm from 'microm';
import jszip from 'jszip';
import sendRecording from '../utils/send-recording';

const initialState = {
    recording: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RECORDING:
            if (state.recording) { 
                startRecording()
            }
            else { 
                stopRecording() 
            }

            return {
                ...state,
                recording: !state.recording
            }
        default:
            return state;
    }
}

const microm = new Microm();

const startRecording = () => {
    microm.record()
        .then(response => {
            console.log('[VCVR] started recording');
        })
        .catch(response => {
            console.log('[VCVR] error when starting recording')
        });
}

const stopRecording = () => {
    microm.stop()
        .then(response => {
            console.log('[VCVR] stopped recording');
            const zip = new jszip()
            zip.file('recording.mp3', response.blob);
            zip.generateAsync({type: 'blob'})
                .then(response => {
                    console.log('[VCVR] sending recording');
                    sendRecording(response);
                })
                .catch(() => {
                    console.log('[VCVR] error when sending recording');
                })
        })
        .catch((response) => {
            console.log('[VCVR] error when stopped recording');
        })
}