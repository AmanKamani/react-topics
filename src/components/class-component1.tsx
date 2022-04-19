import { Component } from "react";

class ClassComponent1 extends Component<{}, {count: number}> {

    constructor(props: {}){
        super(props);
        this.state = {
            count: 0
        };
    }

    clickHandler() {
        alert("clicked!!")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click on Class Component</button>
            </div>
        )
    }
}

export default ClassComponent1;
