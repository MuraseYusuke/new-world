import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./App";
import WelcomePage from './components/pages/Welcome';
import ChangeProfile from './components/pages/ChangeProfile';
import NotFound from './components/pages/NotFound';


export class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Welcome" component={WelcomePage} />
                    <Route exact path="/ChangeProfile" component={ChangeProfile} />
                    <Route exact Path="/NotFound" component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;