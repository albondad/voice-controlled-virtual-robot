import { connect } from 'react-redux';
import React from 'react';
import { TOGGLE_RECORDING} from '../redux';
import { Grid } from '@material-ui/core';

const App = (props) => {
    return ( 
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