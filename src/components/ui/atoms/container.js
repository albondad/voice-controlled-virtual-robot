import React from 'react';
import { rem } from 'polished';

export const Container = (props) => {
    return (
        <div 
            className="Container"
            onClick={props.onClick}
            style={{
                display: props.display,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                marginTop: props.mt,
                marginRight: props.mr,
                marginBottom: props.mb,
                marginLeft: props.ml,
                paddingTop: props.pt,
                paddingRight: props.pr,
                paddingBottom: props.pb,
                paddingLeft: props.pl
            }}
        >
            {props.children}
            <style jsx>{`
                .Container {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    font-size: ${rem(16)}
                }
            `}</style>
        </div>
    )
}

Container.defaultProps = {
    children: null,
    onClick: () => {},
    marginTop: null,
    marginRight: null,
    marginBottom: null,
    marginLeft: null,
    paddingTop: null,
    paddingRight: null,
    paddingBottom: null,
    paddingLeft: null
}