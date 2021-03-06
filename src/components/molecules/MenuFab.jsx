import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Add, Close, PlusOne, Menu, Map } from '@material-ui/icons';
// import { transition } from 'react-transition-group';

class MenuFab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        const {
            open,
        } = this.state;
        const {
            onAddClick,
        } = this.props;
        return (
            <div>
                <Fab
                    onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}
                    size={"large"}
                    style={{
                        position: "absolute",
                        bottom: 24,
                        right: 24,
                        backgroundColor: "rgba(107, 255, 205, 0.3)",
                        border: "2px solid white",
                    }}
                >
                    {
                        open ?
                            <Close
                                style={{
                                    color: "white"
                                }}
                            />
                            :
                            <Menu
                                style={{
                                    color: "white"
                                }}
                            />
                    }
                </Fab>
                <Fab
                    onClick={() => {
                    }}
                    size={"small"}
                    style={{
                        position: "absolute",
                        bottom: 6,
                        right: 84,
                        backgroundColor: "rgba(107, 255, 205, 0.3)",
                        border: "2px solid white",
                        opacity: open ? 1 : 0,
                        // transition: transitions.create('all', "200ms", "0ms", "ease-out"),
                    }}
                >
                    <Map
                        style={{
                            color: "white"
                        }}
                    />
                </Fab>
                <Fab
                    onClick={() => {
                    }}
                    size={"small"}
                    style={{
                        position: "absolute",
                        bottom: 52,
                        right: 87,
                        backgroundColor: "rgba(107, 255, 205, 0.3)",
                        border: "2px solid white",
                        opacity: open ? 1 : 0,
                        // transition: transitions.create('all', "200ms", "0ms", "ease-out"),
                    }}
                >
                    <Add
                        style={{
                            color: "white"
                        }}
                    />
                </Fab>
                <Fab
                    onClick={() => {
                        onAddClick();
                    }}
                    size={"small"}
                    style={{
                        position: "absolute",
                        bottom: 85,
                        right: 51,
                        backgroundColor: "rgba(107, 255, 205, 0.3)",
                        border: "2px solid white",
                        opacity: open ? 1 : 0,
                        // transition: transitions.create('all', "200ms", "0ms", "ease-out"),
                    }}
                >
                    <Add
                        style={{
                            color: "white"
                        }}
                    />
                </Fab>
                <Fab
                    onClick={() => {
                    }}
                    size={"small"}
                    style={{
                        position: "absolute",
                        bottom: 80,
                        right: 4,
                        backgroundColor: "rgba(107, 255, 205, 0.3)",
                        border: "2px solid white",
                        opacity: open ? 1 : 0,
                        // transition: transitions.create('all', "200ms", "0ms", "ease-out"),
                    }}
                >
                    <PlusOne
                        style={{
                            color: "white"
                        }}
                    />
                </Fab>
            </div>
        );
    }
}

export default MenuFab;
