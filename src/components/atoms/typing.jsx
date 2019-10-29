import React from 'react';

class Typing extends React.Component {
    setId = 0;
    
    componentDidMount(){
        let i = 0;
        this.printText(i);
    }

    componentWillUnmount(){
        clearTimeout(this.setId);
    }

    printText(i) {
        document.getElementById("text").innerText = this.props.text.substring(0,i++);
        if(i <= this.props.text.length){
            this.setId = setTimeout(this.printText(i + 1), 300);
        }
    }

    render(){
        return (
            <div
                id={"text"}
            >

            </div>
        );
    }
};

export default Typing;