import { connect } from 'react-redux';
import React from 'react';
import { RecordButton } from './ui/atoms';
import { 
    START_RECORDING, TOGGLE_RECORDING
} from '../redux';
import { Button } from '@material-ui/core';
const App = (props) => {
    return (
        <>
            <RecordButton
                onClick={() => { props.toggleRecording() }}
                recording={props.recording}
            >
            </RecordButton>
        </>
        
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleRecording: () => dispatch({ type: TOGGLE_RECORDING })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);