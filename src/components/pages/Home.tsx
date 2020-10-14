import * as React from 'react';
import './../../App.css';
import { withRouter } from "react-router";
import Template from '../templates';
import ImageBox from '../atoms/ImageBox';
import Img from './../../assets/fanany.jpg';
import theme from '../theme';
import ChatBabble from '../atoms/ChatBabble';
import firebase from '../../firebase';
import ImgMediaCard from '../molecules/Card';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as home from '../../store/home';
import { ApplicationState } from '../../store';
import { bindActionCreators } from 'redux';

interface HomeProps extends MapStateToProps, MapDispatchToProps {
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      userData: undefined,
      chatRooms: [],
    }
  }

  componentDidMount() {
    this.props.onInit("gorira");
    firebase.auth().onAuthStateChanged(userData => {
      this.setState({ userData }, async () => {
      });
    });
  }

  render() {
    const {
      master,
      test
    } = this.props;
    console.log({
      test,
      master,
    })
    return (
      <Template>
        <div
          style={{
            display: "flex",
            alignItems: 'baseline',
          }}
        >
          <div
            style={{
              display: "inline-block",
              borderLeft: `1px solid ${theme.color.pureColor}`,
              borderRight: `1px solid ${theme.color.pureColor}`,
              paddingLeft: 2,
              paddingRight: 2,
              margin: 8,
            }}
          >
            <ImageBox
              src={Img}
              alt={"naru"}
              title={"naru"}
              style={{
                border: `1px solid ${theme.color.pureColor}`,
                marginTop: 4,
              }}
              imgStyle={{
                height: 50,
                width: 50,
              }}
            />
          </div>
          <ChatBabble
            label={test ? test : "なんもない"}
              style={{
                flexBasis: '70%'
              }}
          />
        </div>
      </Template>
    );
  }
};


interface MapStateToProps extends home.HomeState {
};
interface MapDispatchToProps extends home.IActionCreators {

}

export default connect(
  (state: ApplicationState) => (state.home),
  (dispatch) => bindActionCreators({ ...home.actionCreators }, dispatch)
)(Home);