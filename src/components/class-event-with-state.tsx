import { Component } from "react";

class ClassEventWithState extends Component<{}, {count: number}> {

    constructor(props: {}) {
        super(props);

        this.state = {
            count: 0
        };

        // 3rd way to bind the method
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }

    // for the 4th way
    clickHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        let message = "";
        if(this.state.count > 0)
            message = `You clicked on Class Button - ${this.state.count}`;

        return (
            <div>
                
                {
                 /**
                 * below button line will give error that setState is undefined
                 * <button onClick={this.clickHandler}>Class - State - Click</button>
                 * if we declare the same function with ES6 syntax (Fat Arrow), It will work.
                 */
                }

                {
                    // 1st way to bind method
                    // <button onClick={this.clickHandler.bind(this)}>Class - State - Click</button>
                }

                {
                    // 2nd way to bind
                    // <button onClick={() => this.clickHandler()}>Class - State - Click</button>
                }

                {
                    // 3rd way to bind
                    // declare event binder in the constructor
                    // <button onClick={this.clickHandler}>Class - State - Click</button>
                }

                {
                    // 4th way to bind
                    // declare method with ES 6 syntax ( Fat Arrow )
                }
                <button onClick={this.clickHandler}>Class - State - Click</button>
                <p>{message}</p>
                
            </div>
        );
    }
}

export default ClassEventWithState;
