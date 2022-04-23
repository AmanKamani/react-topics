import React, { Component } from 'react'

export class WithClassIntervalCounter extends Component<any, {count: number}> {

    interval!: any;

    constructor(props: any){
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (<><h2>{this.state.count}</h2></>)
    }
}

export default WithClassIntervalCounter