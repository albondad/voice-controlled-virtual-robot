import React from 'react';
import clsx from 'clsx';
import { em, rem } from 'polished';

export const Button = (props) => {
    return (
        <button 
            className="Button"
            onClick={props.onClick}
        >
            {props.children}
            <style jsx>{`
                .Button {
                    border-color: transparent;
                    background-color: #333333;
                    padding-top: ${em(8)};
                    padding-right: ${em(16)};
                    padding-bottom: ${em(8)};
                    padding-left: ${em(16)};
                    font-size: ${rem(16)};
                    color: #EEEEEE;
                }
            `}</style>
        </button>
    )
}

Button.defaultProps = {
    children: null,
    onClick: () => {}
}