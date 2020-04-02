import * as React from 'react';
import styled from 'styled-components';

interface Props {
}

interface State {
}

class MainMenu extends React.Component<Props, State> {
    render() {
        return (
            <MenuContainer>
                {"test"}
            </MenuContainer>
        );
    }
}

const MenuContainer = styled.div`
    height: 100%;
    width: 300px;
    border: 1px solid white;
`;

export default MainMenu;