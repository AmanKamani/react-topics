import React, { Component } from "react";
import { ChildComponent } from "./child.component";

export class ParentComponent extends Component{
    childRef: React.RefObject<any>;

    constructor(props: any){
        super(props);

        this.childRef = React.createRef();
    }

    focusChildMsg  = () => {
        this.childRef.current.focusOnMessage();
    }

    render(){
        return (<>
            <ChildComponent  ref={this.childRef}/>
            <button onClick={this.focusChildMsg}>Click to Focus Message</button>
        </>);
    }

}