import React, { Component, PureComponent } from "react";
import { ClassComponent } from "./class.component";
import FunctionComponent from "./function.component";

export class ParentComponent extends PureComponent<any, {name: string, count: number}>{

    constructor(props: any){
        super(props);
        this.state = {
            name: "Test",
            count: 1,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Test",
                count: 1
            });
        }, 1000);
    }

    render() {
        console.log(`===== prent render =====`);
        return (<>
            <p>Open console to see the logs</p>
            <ClassComponent count={this.state.count}/>
            <FunctionComponent name={this.state.name}/>
        </>
        );
    }
}