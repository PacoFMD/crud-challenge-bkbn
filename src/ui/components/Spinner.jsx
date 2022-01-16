import React from 'react';

const Spinner = (props) => {
    const {
        color = 'var(--theme-color-yellow)',
        marginTop = '0',
    } = props;

    const defaultStyle = {
        width: '18px',
        height: '18px',
        backgroundColor: color,
        borderRadius: '100%',
        display: 'inline-block',
        WebkitAnimation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
        animation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
    }
    const divSpinnerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop
    };
    const BounceStyle1 = {
        ...defaultStyle,
        WebkitAnimationDelay: '-0.32s',
        animationDelay: '-0.32s',
    }
    const BounceStyle2 = {
        ...defaultStyle,
        WebkitAnimationDelay: '-0.16s',
        animationDelay: '-0.16s',
    }

    return ( 
        <div style={divSpinnerStyle}>
            <div style={BounceStyle1}></div>
            <div style={BounceStyle2}></div>
            <div style={defaultStyle}></div>
        </div>
     );
}
 
export default Spinner;