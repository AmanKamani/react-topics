import { Component } from "react";
import { CounterProps } from "../counter.props";

/**
 * Duplicate Code 
 
class ClickCounterComponent2 extends Component<any, {count: number}>{

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

*/


class ClickCounterComponent2 extends Component<CounterProps, any> {

    render() {
        const { incrementCount, count } = this.props;
        return (<>
            <button onClick={incrementCount}>Clicked {count} Times.</button>
        </>)
    }
}

export default ClickCounterComponent2;

