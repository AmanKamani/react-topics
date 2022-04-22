import { Component, ReactNode } from "react";


export const withCounter = (OriginalComponent: any, increment: number = 1) => {

    class NewComponent extends Component<any, {count: number}>{

        constructor(props: any){
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState(prevState => ({
                count: prevState.count + increment
            }));
        }

        render(): ReactNode {
            const { count } = this.state;
            return <OriginalComponent
                count={count}
                incrementCount={this.incrementCount}
                {...this.props} />
                // {...this.props} - is to pass othe props, if anything extra is passed from app.tsx
        }
    }

    return NewComponent;
}