import React from 'react';
import { withRouter } from "react-router";
import Iframe from 'react-iframe';

class ChangeProfile extends React.Component{
    render(){
        return (
            <div>
                {"何にもないよ"}
                <Iframe 
                    url="https://www.youtube.com/"
                    width="500px"
                    height="500px"
                    id="id"
                    position="relative"
                />
                <iframe 
                
                />
            </div>
        )
    }
}

export default withRouter(ChangeProfile);