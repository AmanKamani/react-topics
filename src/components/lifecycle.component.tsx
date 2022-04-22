import { Component } from "react";
import { ChildLifecycleComponent } from "./child-lifecycle.comonent";

export class LifecycleComponent extends Component<any, {}>{

    constructor(props: any){
        super(props);
        this.state = {};

        console.log(`1. Constructor`)
    }

    static getDerivedStateFromProps(props: any, state: any) {
        console.log(`2. Staic getDerivedStateFromProps`)
        
        // should return new state or null
        return null;
    }

    render() {
        console.log(`3. Render`)
        return (
            <div>
                <h4>Open console to see the lifecycle logs</h4>
                <ChildLifecycleComponent />
            </div>
        )
    }

    componentDidMount() {
        // can make API calls 
        console.log(`4. ComponentDidMount`)
    }
}