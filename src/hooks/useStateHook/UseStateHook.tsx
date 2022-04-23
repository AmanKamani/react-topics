import TitleComponent from "../../common/title.component";
import HookCounter from "./1-HookCounter"
import HookWithObject from "./2-HookWithObject";
import HookWithArray from "./3-HookWithArray";

const UseStateHook = () => {

    return (<>
        <TitleComponent title="useState Hook" />
        <HookCounter />
        <hr/>

        <HookWithObject />
        <hr />

        <HookWithArray />
        <hr />
    </>)
}

export default UseStateHook;