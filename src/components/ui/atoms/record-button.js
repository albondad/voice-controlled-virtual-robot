import React from 'react';
import clsx from 'clsx';
import { em, rem } from 'polished';

export const RecordButton = (props) => {
    return (
        <button 
            className={clsx('RecordButton', {
                "RecordButton--recording": props.recording
            })}
            onClick={props.onClick}
        >
            {props.children}
            <style jsx>{`
                .RecordButton {
                    border-style: none;
                    border-radius: ${em(32)};
                    background-color: #bbbbbb;
                    width: ${em(64)};
                    height: ${em(64)};
                    font-size: ${rem(16)};
                    transition: transform 1s;
                }

                .RecordButton--recording {
                    animation-name: recording;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-out;
                }

                @keyframes recording {
                    0% {transform: scale(1);}
                    25% {transform: scale(1.2);}
                    100% {transform: scale(1)}
                }
            `}</style>
        </button>
    )
}

RecordButton.defaultProps = {
    recording: false
}