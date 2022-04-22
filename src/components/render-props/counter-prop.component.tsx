import { Component } from "react";

class CounterPropComponent extends Component<any, {count: number}>{

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

    render() {
        return (<>
            { this.props.render(this.state.count, this.incrementCount) }
        </>)
    }
}

export default CounterPropComponent;