import React, { Component } from 'react'

class DocTitleWithClass extends Component<any, {count: number}> {
    constructor(props: any){
        super(props);
        this.state = {
            count:0
        };
    }

    // setting document title for first time
    componentDidMount() {
        document.title = `Count ${this.state.count}`;
    }

    // setting document title on every update of countState
    componentDidUpdate(prevProps: any, prevState: {count: number}) {
        if(prevState.count !== this.state.count)
            document.title = `Count ${this.state.count}`;
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        const {count} = this.state;
        return (
        <div>
            <button onClick={this.incrementCount}>count {count}</button>
        </div>
        );
  }
}

export default DocTitleWithClass