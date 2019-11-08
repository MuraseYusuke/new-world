import * as React from 'react';
import Routes from './Routes';

class App extends React.Component {

  render() {
    console.log("app.jsx");
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
};


export default App;