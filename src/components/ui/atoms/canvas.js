import React, { useState, useEffect, useLayoutEffect} from 'react';

export const Canvas = React.forwardRef((props, ref) => {
    const [ dpi, setDpi ] = useState(window.devicePixelRatio);
    const [ height, setHeight ] = useState(0);
    const [ width, setWidth ] = useState(0);

    useEffect(() => {
        // handle canvas and canvas resolution resizing
        window.addEventListener('resize', () => {
            setWidth(ref.current.clientWidth)
            setHeight(ref.current.clientWidth * 0.5625);
        })
    });

    useLayoutEffect(() => {
        // handle canvas and canvas resolution sizing
        setWidth(ref.current.clientWidth)
        setHeight(ref.current.clientWidth * 0.5625);
    })

    return (
        <>
            <canvas
                ref={ref}
                className='Canvas'
                height={height * dpi}
                width={width * dpi}
                style={{
                    height: height
                }}
            >
            </canvas>
            <style jsx>{`
                .Canvas {
                    display: block;
                    width: 100%;
                }
            `}</style>
        </>
    )
})

Canvas.defaultProps = {
    children: null,
    paint: () => {}
}