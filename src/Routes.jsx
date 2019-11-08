import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import WelcomePage from './components/pages/Welcome';
import ChangeProfile from './components/pages/ChangeProfile';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';

export class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Welcome" component={WelcomePage} />
                    <Route exact path="/ChangeProfile" component={ChangeProfile} />
                    <Route exact Path="/NotFound" component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;