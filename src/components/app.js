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

export default App;