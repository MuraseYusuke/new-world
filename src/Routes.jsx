import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import ChatHome from './components/pages/ChatHome';
import WelcomePage from './components/pages/Welcome';
import ChangeProfile from './components/pages/ChangeProfile';
import PersonalData from './components/pages/PersonalData';
import PersonalDataList from './components/pages/PersonalDataList';
import AddPerson from './components/pages/AddPerson';
import NotFound from './components/pages/NotFound';
import Ranking from './components/pages/Ranking';
import RankingList from './components/pages/RankingList';
import BadCar from './components/pages/BadCar';


export class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/ChatHome" component={ChatHome} />
                    <Route exact path="/Chat" component={Chat} />
                    <Route exact path="/Welcome" component={WelcomePage} />
                    <Route exact path="/ChangeProfile" component={ChangeProfile} />
                    <Route exact path="/PersonalDataList" component={PersonalDataList} />
                    <Route exact path="/PersonalData" component={PersonalData} />
                    <Route exact path="/AddPerson" component={AddPerson} />
                    <Route exact path="/RankingList" component={RankingList} />
                    <Route exact path="/Ranking" component={Ranking} />
                    <Route exact path="/BadCar" component={BadCar} />
                    <Route exact component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;