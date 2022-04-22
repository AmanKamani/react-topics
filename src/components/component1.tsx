import React, { Component } from "react"

export class Component1 extends Component{
    render() {
        return(
            /**  here the div will be added to the DOM tree. 
              *  so, it will become:
              *      <div id="app">
              *          <div>
              *              <h1></h1>
              *          </div>
              *      </div> 
              * But it is unnecessary to add
              */
            // <div>
            //     <h1> Hello World !</h1>
            // </div>


            /** here the React.Fragment will not create any node in DOM tree.
              * so, the h1 tag will be the direct children of <div id="app"></div>
              */
            // <React.Fragment>
            //     <h1> Hello World ! </h1>
            // </React.Fragment>


            /**
             * Short way of writing React.Fragment is:
             */
            <>
                <h1>Hello World !</h1>
            </>
        )
    }
}