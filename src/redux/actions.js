
import Microm from 'microm';
import jszip from 'jszip';
import sendRecording from '../utils/send-recording';
export const TOGGLE_RECORDING_ASYNC = 'TOGGLE_RECORDING_ASYNC';
export const TOGGLE_RECORDING = 'TOGGLE_RECORDING';
export const START_RECORDING = 'START_RECORDING';
export const STOP_RECORDING = 'STOP_RECORDING';
export const UPDATE_VELOCITY = 'UPDATE_VELOCITY';
export const TOGGLE_SHOULD_UPDATE = 'TOGGLE_SHOULD_UPDATE';

export const toggleRecordingAsync = () => {
    return async (dispatch, getState) => {
        const state = getState()
        let response = {};

        if (state.recording) {
            dispatch({type: STOP_RECORDING});
            dispatch({type: TOGGLE_SHOULD_UPDATE});
            const response = await stopRecording();
            let intent = null;
            try {
                intent = response.response.intents[0].name;
            } catch (error) {
                intent = null;
            }

            console.log(intent)
            switch (intent) {
                case 'move_forward':
                    dispatch({type: UPDATE_VELOCITY, velocity: {xVelocity: 48}})
                    break;
                case 'move_up':
                    dispatch({type: UPDATE_VELOCITY, velocity: {yVelocity: -48}})
                    break;
                case 'move_backward':
                    dispatch({type: UPDATE_VELOCITY, velocity: {xVelocity: -48}})
                    break;
                    
                case 'move_down':
                    dispatch({type: UPDATE_VELOCITY, velocity: {yVelocity: 48}})
                    break;
                default:
                    break;
            }
            
            dispatch({type: TOGGLE_SHOULD_UPDATE});
            console.log(getState().data);
        }
        else {
            dispatch({type: START_RECORDING});
            startRecording();
        }

        dispatch({
            type: TOGGLE_RECORDING,
            response: response
        })
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

const stopRecording = async () => {
    try {
        // stopping recording
        const audio = await microm.stop();
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