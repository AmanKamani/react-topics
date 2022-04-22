import { Component, Context } from "react";
import ComponentC from "./c-component";
import UserContext from "./user.context";

class ComponentB extends Component {

    /** 
     * 2nd way to get the context value with contextType
     * Limitations:
     * It won't work with function component. As Functions doesn't have static, unlike Class.
     */
    static contextType = UserContext;
    context!: React.ContextType<typeof UserContext>;
    

    render(): React.ReactNode {
        const { username } = this.context
        return (<>
            <p>Component B - Context = <b>{username}</b></p>
            <ComponentC/>
        </>);
    }
}

export default ComponentB;