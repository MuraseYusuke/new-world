import React from 'react';
import { TwitterTimeline } from 'react-twitter-embedded-timeline';

class twitter extends React.Component {
    render(){
        return <TwitterTimeline widgetId="" chrome="noheader noscrollbar" />
    }
}

export default twitter;