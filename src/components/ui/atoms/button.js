import React from 'react';
import clsx from 'clsx';
import { em, rem } from 'polished';

export const Button = (props) => {
    return (
        <button 
            className="Button"
            onClick={props.onClick}
            style={{
                backgroundColor: props.backgroundColor
            }}
        >
            {props.children}
            <style jsx>{`
                .Button {
                    border-color: transparent;
                    padding: ${em(16)} ${em(24)};
                    font-size: ${rem(16)};
                    color: #EEEEEE;
                }

                .Button:hover, .Button:focus {
                    opacity: 0.8;
                }

                .Button:active {
                    opacity: 0.6;
                }
            `}</style>
        </button>
    )
}

Button.defaultProps = {
    children: null,
    onClick: () => {},
    backgroundColor: '#333333',
}