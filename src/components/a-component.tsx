import { Component } from "react";
import ComponentB from "./b-component";

class ComponentA extends Component{

    render(): React.ReactNode {
        return (<>
            <ComponentB />
        </>);
    }
}

export default ComponentA;