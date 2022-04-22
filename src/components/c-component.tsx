import { Component } from "react";
import { UserConsumer } from "./user.context";

class ComponentC extends Component{

    render(): React.ReactNode {
        return (<>
            <UserConsumer>
                {
                    (value) => {
                        return  <p>Component C - <b>{value.username}</b></p>
                    }
                }       
            </UserConsumer>
        </>);
    }
}

export default ComponentC;