import React from 'react';
import { withRouter } from "react-router";
import Iframe from 'react-iframe';

class ChangeProfile extends React.Component{
    render(){
        return (
            <div>
                {"何にもないよ"}
                <Iframe 
                    url="https://voguegirl.jp/horoscope/shiitake/gemini/"
                    width="500px"
                    height="500px"
                    id="id"
                    position="relative"
                />
            </div>
        )
    }
}

export default withRouter(ChangeProfile);