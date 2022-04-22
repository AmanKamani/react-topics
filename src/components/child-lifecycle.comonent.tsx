import { Component } from "react";

export class ChildLifecycleComponent extends Component<any, {}>{
    constructor(props: any) {
        super(props);
        this.state = {};
        console.log(`C-1. Constructor`)
    }

    static getDerivedStateFromProps(props: any, states: any){
        console.log(`C-2. Staic getDerivedStateFromProps`)
        
        // should return new state or null
        return null;
    }

    render(){
        console.log(`C-3. Render`)
        return (<></>);
    }

    componentDidMount(){
        console.log(`C-4. comopnentDidMount`);
    }
}