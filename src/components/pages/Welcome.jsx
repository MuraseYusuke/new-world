import React from 'react';
import styled from 'styled-components';
// import FadeAnimation from './../atoms/Fade';
// import GifPlayer from 'react-gif-player';
// import loading from './../../assets/loading.gif';

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
        }, 8000);
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
              <GifContainer>
                  {
                    //   <GifPlayer
                    //       gif={loading}
                    //   />
                  }
              </GifContainer>
          </BkColor>
      );
  }
};

export default WelcomePage;

// const Discription = styled.p`
//     color: white;
//     font-size: 100px;
//     margin: 0px;
//     text-align: center;
//     padding-top: 50px;
// `

export const BkColor = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #000;
`

export const GifContainer = styled.div`
    text-align: center;
`