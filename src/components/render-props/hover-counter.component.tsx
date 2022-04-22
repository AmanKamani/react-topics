import { Component, ReactNode } from "react";
import { CounterProps } from "../counter.props";

/**
 * Duplicate Code 
 
class HoverCounterComponent2 extends Component<any, {count: number}>{

    constructor(props: any){
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render(): ReactNode {
        return (<>
            <h4 onMouseEnter={this.incrementCount}>Hoverd {this.state.count} times.</h4>
        </>);
    }
}

*/


class HoverCounterComponent2 extends Component<CounterProps, any> {
    render(): ReactNode {
        const { incrementCount, count } = this.props;
        return (<>
            <h4 onMouseEnter={incrementCount}>Hoverd {count} times.</h4>
        </>);
    }
    
}

export default HoverCounterComponent2;
