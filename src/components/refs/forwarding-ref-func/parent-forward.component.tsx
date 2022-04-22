import React from "react";
import { Component } from "react";
import { ChildForwardingComponentRef } from "./child-forward.component";

export class ParentForwardComponent extends Component{
    inputRef: React.RefObject<any>;

    constructor(props: any){
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

    render(){
        return (<>
            <ChildForwardingComponentRef ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Click to focus Input</button>
        </>);
    }
}