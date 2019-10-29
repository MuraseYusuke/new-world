import React from 'react';
import { YoutubeSearchedForOutlined, YoutubeSearchedFor, YoutubeSearchedForRounded } from '@material-ui/icons';

class YouTube extends React.Component{

    render(){
        return (
            <div>
                <YoutubeSearchedForOutlined
                    style={{
                        color: "white"
                    }}
                />
                <YoutubeSearchedFor
                    style={{
                        color: "white"
                    }}
                />
                <YoutubeSearchedForRounded
                    style={{
                        color: "white"
                    }}
                />
            </div>

        );
    }
}

export default YouTube;