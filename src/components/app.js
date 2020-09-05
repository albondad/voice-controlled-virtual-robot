import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_RECORDING} from '../redux';
import { Home } from './pages';

const App = (props) => {
    return (
        <>
            <Home />
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