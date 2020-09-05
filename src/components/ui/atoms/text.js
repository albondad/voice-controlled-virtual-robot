import React from 'react';
import { em, rem } from 'polished';

export const Text = (props) => {
    return (
        <div 
            className="Text"
            onClick={props.onClick}
            style={{
                display: props.display,
                fontSize: props.size,
                fontWeight: props.weight,
                lineHeight: props.height
            }}
        >
            {props.children}
        </div>
    )
}

Text.defaultProps = {
    display: null,
    fontSize: rem(16),
    lineHeight: em(24)
}