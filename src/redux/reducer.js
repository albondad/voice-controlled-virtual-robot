import {
    TOGGLE_RECORDING_ASYNC,
    TOGGLE_RECORDING,
    START_RECORDING,
    STOP_RECORDING,
    UPDATE_VELOCITY,
    TOGGLE_SHOULD_UPDATE
 } from './actions' 
import Microm from 'microm';
import jszip from 'jszip';
import sendRecording from '../utils/send-recording';
import { createStore } from 'redux';

const initialState = {
    recording: false,
    data: {
        friction: 4,
        xPosition: 64,
        yPosition: 64,
        xVelocity: 0,
        yVelocity: 0,
    },
    shouldUpdate: true,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_RECORDING:
            return {
                ...state,
                recording: true
            }
        case STOP_RECORDING:
            return {
                ...state,
                recording: false
            }
        case UPDATE_VELOCITY:
            //console.log(action.velocity);
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.velocity
                }
            }
        case TOGGLE_SHOULD_UPDATE:
            return {
                ...state,
                shouldUpdate: !state.shouldUpdate
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
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

const stopRecording = async () => {
    try {
        // stopping recording
        const audio = await microm.stop();
        microm.play();
        // zipping recorded audio
        const zip = new jszip();
        zip.file('recording.mp3', audio.blob);

        // returning blob of zip of recording audio
        const zipAsBlob = await zip.generateAsync({type: 'blob'});
        const response = await sendRecording(zipAsBlob);

        return response;
    }
    catch (error) {
        return error
    }
}