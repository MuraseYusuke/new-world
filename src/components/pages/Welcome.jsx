import React from 'react';
import { BkColor } from './Login';
import styled from 'styled-components';
import FadeAnimation from './../atoms/Fade';

class WelcomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: 0,
            newWorld: 0,
        }
    }

    welcomeId = 0;
    newWorldId = 0;

    componentDidMount() {
        this.welcomeId = setTimeout(() => {
            // this.props.history.push('/');
        }, 2000);
    }

    componentWillUnmount(){
        clearTimeout(this.welcomeId);
        clearTimeout(this.newWorldId);
    }

  render() {
    const {
        open,
        newWorld,
    } = this.state;

    console.log({
        open,
        newWorld,
    })

    return (
        <BkColor>
            <FadeAnimation
                entered={open}
            >
                <Discription>{"ようこそ"}</Discription>
            </FadeAnimation>
            <FadeAnimation
                entered={newWorld}
            >
                <Discription>{"あたらしいセカイへ"}</Discription>
            </FadeAnimation>
        </BkColor>
    );
  }
};

export default WelcomePage;

const Discription = styled.p`
    color: white;
    font-size: 100px;
    margin: 0px;
    text-align: center;
    padding-top: 50px;
`

