import React from 'react';
import { withRouter } from "react-router";
import styled from 'styled-components';

class NotFound extends React.Component{
    render(){
        return (
            <PageLayout>
                <div>404</div>
                <div>Page Not Found</div>
            </PageLayout>
        )
    }
}

export default NotFound;

const PageLayout = styled.div`
    font-size: 100px;
    text-align: center;
`