import React from "react";

interface CC1Props {
    name: string;
    incrementBy: number;
}

class ClassComponent1 extends React.Component<CC1Props, {count: number}> {

    constructor(props: CC1Props) {
        super(props);
        
        this.state = {
            count: 0
        };
    }

    countClick() {
        /** 
         this.setState({
            count: this.state.count + 1
         }); 
         */

        // or
        
        /** sometimes react groups multiple setState calls to a single call.
         *  So, it won't set the values properly.
         *  In order to avoid that we have to set the values through previous state
         */
        this.setState((prevState) => (
            {
                count: prevState.count + this.props.incrementBy
            }
        ), () => {
            alert(`State changed to ${this.state.count}`);
        });
    }



    render() {
        return <p>
            Hi <b><u>{this.props.name}</u></b> from Class Component.
            <button onClick={() => this.countClick()}>Click Class - {this.state.count}</button>
        </p>;
    }
}

export default ClassComponent1;
