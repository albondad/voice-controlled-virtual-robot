import React, { useState, useRef, useLayoutEffect } from 'react';
import { Grid } from '@material-ui/core'
import { 
    Button,
    Canvas,
    Container, 
    Text
} from '../ui/atoms';
import { connect } from 'react-redux';
import { 
    toggleRecordingAsync, 
    TOGGLE_RECORDING_ASYNC, 
    TOGGLE_RECORDING,
    UPDATE_VELOCITY
} from '../../redux';
import { store } from '../../redux/store'
import { rem, em } from 'polished';

const Home = (props) => {
    const canvasRef = useRef(null);
    setInterval(() => {
        update(canvasRef.current, data)
        paint(canvasRef.current, canvasRef.current.getContext('2d'), data);
        //console.log(data)
    }, 500)

    return (
        <Container
            pt={em(64)}
            pr="20%"
            pb={em(64)}
            pl="20%"
        >
            <Container>
                <Text
                    size={rem(48)}
                    weight={700}
                    height={em(56, 48)}
                >
                    Voice Controlled Virtual Robot
                </Text>
            </Container>
            <Container mt={em(16)}>
                <Canvas 
                    ref={canvasRef}
                    //paint={(canvas, context) => paint(canvas, context)}
                />
            </Container>
            <Container mt={em(24)}>
                <Grid container>
                    <Grid 
                        item
                        xs={6}
                    >
                        <Container
                            display="flex"
                            justifyContent="flex-start"
                        >
                            <Button onClick={() => props.updateMessage()}>View Logs</Button>
                        </Container>
                    </Grid>
                    <Grid 
                        item
                        xs={6}
                    >
                        <Container
                            display="flex"
                            justifyContent="flex-end"
                        >
                            <Button
                                onClick={() => props.toggleRecordingAsync()}
                                backgroundColor={props.recording ? '#EA4335' : '#333333'}
                            >
                                {
                                    props.recording ? 'Stop Recording' : 'Start Record'
                                }
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        recording: state.recording
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleRecordingAsync: () => dispatch(toggleRecordingAsync()),
        updateMessage: () => dispatch({type: UPDATE_MEANING, message: 'this is an old adsfadsfadfs'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

let xOffset = 64;

let data = store.getState().data;
let lastData = data;



// data = {
//     friction: 4,
//     xPosition: 32,
//     yPosition: 32,
//     xVelocity: 64,
//     yVelocity: 64,
// }

const update = (canvas, lastData) => {
    lastData = store.getState().data;
    let friction = lastData.friction;
    let xPosition = lastData.xPosition;
    let yPosition = lastData.yPosition;
    let xVelocity = lastData.xVelocity;
    let yVelocity = lastData.yVelocity;

    if (xVelocity > 0) {
        xVelocity -=  friction;
        if (xVelocity < 0) {
            xVelocity = 0;
        }
    }
    if (xVelocity < 0) {
        xVelocity +=  friction;
        if (xVelocity > 0) {
            xVelocity = 0;
        }
    }
    if (yVelocity > 0) {
        yVelocity -=  friction;
        if (yVelocity < 0) {
           yVelocity = 0;
        }
    }
    if (yVelocity < 0) {
        yVelocity +=  friction;
        if (yVelocity > 0) {
            yVelocity = 0;
         }
    }

    if (xPosition < 0) {
        xPosition = 0;
        xVelocity *= -1;
    }

    if (xPosition > canvas.width) {
        xPosition = canvas.width;
        xVelocity *= -1;
    }

    if (yPosition < 0) {
        yPosition = 0;
        yVelocity *= -1;
    }

    if (yPosition > canvas.height) {
        yPosition = canvas.height;
        yVelocity *= -1;
    }

    xPosition += xVelocity;
    yPosition += yVelocity;

    if (store.getState().shouldUpdate) {
        data = {
            ...lastData,
            xPosition,
            yPosition,
            xVelocity,
            yVelocity
        }
    
        store.dispatch({
            type: UPDATE_VELOCITY,
            velocity: {
                ...data,
            }
        })
    }
    //console.log(data);
}

const paint = (canvas, context, data) => {
    context.clearRect(0, 0, canvas.with, canvas.height);
    context.beginPath();

    let defaultWidth = canvas.width;
    canvas.width = 0;
    canvas.width = defaultWidth;


    context.fillStyle = "#333333"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "#eeeeee"
    context.beginPath;
    context.arc(data.xPosition, data.yPosition, 32, 0, 2 * Math.PI,)
    context.fill();
}