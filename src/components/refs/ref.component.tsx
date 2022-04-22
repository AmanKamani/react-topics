import React, { Component } from "react";

export class RefComponent extends Component{
    inputRef: React.RefObject<any>;

    constructor(props: any){
        super(props);
        
        this.inputRef = React.createRef();
    }

    focusOnName = () => {
        this.inputRef.current.focus();
    }

    onSubmit = () => {
        alert(`Name: ${this.inputRef.current.value}`);
    }

    render(){
        return(
            <>
                <p>Normal Ref Example</p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={this.inputRef}/>
                <button onClick={this.focusOnName}>Click to focus on Name</button>
                <button onClick={this.onSubmit} type="submit">Submit</button>
            </>
        );
    }

}