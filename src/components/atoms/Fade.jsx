import React from 'react';
import styled, { keyframes } from 'styled-components';

class FadeAnimation extends React.Component {

    static defaultProps = {
        enterd: 0
    }

    render() {
        const {
            out,
            children
        } = this.props;

        return (
            <Fade
                out={out}
            >
                {children}
            </Fade>
        );
    }
}


export const Fade = styled.div`
    display: inline-block;
    opacity: ${props => props.out ? 1 : 0};
    animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
    transition: opacity 1s linear;
`

const fadeIn = keyframes`
    from {
        transform: scale(.25);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        transform: scale(1);
        opacity: 0;
    }
    to {
        transform: scale(.25);
        opacity: 1;
    }
`

export default FadeAnimation;