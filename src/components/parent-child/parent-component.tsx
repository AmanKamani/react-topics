import ChildComponent from "./child-component";

function ParentComponent() {

    const onclick = (clickNumber: number) => {
        alert(`Hi from parent with click ${clickNumber}`)
    }

    return (
        <div>
            <ChildComponent onclick={onclick}/>
        </div>
    );
}

export default ParentComponent;