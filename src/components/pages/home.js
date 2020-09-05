import React, { useRef, useLayoutEffect } from 'react';
import { Grid } from '@material-ui/core'
import { 
    Button,
    Canvas,
    Container, 
    Text
} from '../ui/atoms';
import { rem, em } from 'polished';

export const Home = (props) => {
    const [xOffset, setXOffset] = useState;
    document.addEventListener('keypress', (event) => {
        console.log(event.code)
        if (event.code === 'keyA') {

        }
    })

    const canvasRef = useRef(null);
    
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
                            <Button>View Logs</Button>
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
                            <Button>Record</Button>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

Home.defaultProps = {
}

const paint = (canvas, context, data) => {
    context.fillStyle = "#333333"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "#eeeeee"
    context.beginPath;
    context.arc(canvas.width/2, canvas.height/2, 32, 0, 2 * Math.PI,)
    context.fill();
}