import { Component, PureComponent, ReactNode } from "react";

export class ClassComponent extends PureComponent<any, {count: number}> {

    constructor(props: any){
        super(props);
        this.state = {
            count: 1,
        };
    }

    render(): ReactNode {
        console.log(`Class render`)
        return (
            <>
                <p>See the console</p>
                <p>Rendered Count - {this.props.count}</p>
            </>
        )
    }
}