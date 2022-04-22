import { Component } from "react";
import { ChildLifecycleComponent } from "./child-lifecycle.comonent";

export class LifecycleComponent extends Component<any, {count: number}>{

    constructor(props: any){
        super(props);
        this.state = {
            count: 0
        };

        console.log(`P. Constructor`);
    }

    static getDerivedStateFromProps(props: any, state: any) {
        console.log(`P. Staic getDerivedStateFromProps`);
        
        // should return new state or null
        return null;
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        console.log(`P. shouldComponentUpdate`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log(`P. getSnapshotBeforeUpdate & returning 'abc'`);

        // return value will be passed to the 3rd arg of componentDidUpdate
        return "abc";
    }

    render() {
        console.log(`P. Render`)
        return (
            <div>
                <h4>Open console to see the lifecycle logs</h4>
                <button onClick={this.increaseCount}>Update parent state - {this.state.count}</button>
                <ChildLifecycleComponent />
            </div>
        )
    }

    componentDidMount() {
        // can make API calls 
        console.log(`P. componentDidMount`);
        console.log(`====== Completed Mounting ======`);
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log(`P. componentDidUpdate = ${snapshot}`);
        console.log(`====== Completed Updating ======`);
    }
}