import React, { Component } from 'react'

export class WithClassMouseEvent extends Component<any, {x: number, y: number}> {

    constructor(props: any){
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }

    componentDidMount(){
        // here event will get registered only once.
        window.addEventListener('mousemove', this.onMouseMove)
    }

    componentWillUnmount() {
        // here event will get unregistered on unmounting of the component.
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (event: any) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        const { x, y} = this.state;
        return (<>
            <p>X: {x}, Y: {y}</p>
        </>)
    }
}

export default WithClassMouseEvent