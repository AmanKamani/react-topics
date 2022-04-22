import { Component } from "react";
import { CounterProps } from "../counter.props";
import { withCounter } from "./counter";

/** Duplicate Code

class ClickCounterComponent extends Component<any, {count: number}>{

    constructor(props: any){
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((prevState: {count: number}) => ({
            count: prevState.count + 1
        }));
    }
    render() {
        return (<>
            <button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>
        </>);
    }

}

export default ClickCounterComponent;

*/


class ClickCounterComponent extends Component<CounterProps, any>{
    
    render() {
        const { count, incrementCount } = this.props;
        return (<>
            <button onClick={incrementCount}>Clicked {count} Times</button>
        </>);
    }

}

export default withCounter(ClickCounterComponent, 5);
