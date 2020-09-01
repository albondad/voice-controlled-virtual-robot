import React from 'react';
import { em, rem } from 'polished';

export const RecordButton = (props) => {
    return (
        <button className="RecordButton">
            {props.children}
            <style jsx>{`
                .RecordButton {
                    background-color: blue;
                    width: ${em(64)};
                    height: ${em(64)};
                    font-size: ${rem(16)};
                }
            `}</style>
        </button>
    )
}