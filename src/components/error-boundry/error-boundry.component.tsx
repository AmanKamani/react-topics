import { Component } from "react";

export class ErrorBoundryComponent extends Component<any, {hasError: boolean}>{

    constructor(props: any){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: any){
        return {
            hasError: true
        }
    }

    componentDidCatch(error: any, logs: any){
        console.log(logs);
    }

    render(){
        if(this.state.hasError) {
            return (<>
                <h4 style={{color: "red"}}>Something Went Wrong !</h4>
            </>);
        }
        else {
            return this.props.children;
        }
    }
}