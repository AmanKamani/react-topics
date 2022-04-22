import { Component } from "react";

export class ChildLifecycleComponent extends Component<any, {count: number}>{
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        ChildLifecycleComponent.log(`Constructor`)
    }

    static getDerivedStateFromProps(props: any, states: any){
        ChildLifecycleComponent.log(`Staic getDerivedStateFromProps`)
        
        // should return new state or null
        return null;
    }

    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        ChildLifecycleComponent.log(`shouldComponentUpdate`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        ChildLifecycleComponent.log(`getSnapshotBeforeUpdate & returning 'def'`);

        // return value will be passed to the 3rd arg of componentDidUpdate
        return "def";
    }

    render(){
        ChildLifecycleComponent.log(`Render`)
        return (<div>
            <button onClick={this.counterClick}>Update child - {this.state.count}</button>
        </div>);
    }

    counterClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentDidMount(){
        ChildLifecycleComponent.log(`comopnentDidMount`);
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        ChildLifecycleComponent.log(`componentDidUpdate = ${snapshot}`)
    }

    private static log(message: string){
        console.log(`\tC. ${message}`)
    }
}