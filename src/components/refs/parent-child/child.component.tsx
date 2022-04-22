import { Component } from "react";

export class ChildComponent extends Component{
    msgRef: any;
    setMsgRef: (element: any) => void;

    constructor(props: any){
        super(props);

        // 2nd way to create ref (this is old way)
        this.msgRef = null;
        this.setMsgRef = (element: any) => {
            this.msgRef = element
        }
    }

    focusOnMessage = () => {
        if(this.msgRef)
            this.msgRef.focus();
    }

    render(){
        return(<>
            <input type={"text"} id="message" placeholder="from child" ref={this.setMsgRef} />
        </>);
    }

}