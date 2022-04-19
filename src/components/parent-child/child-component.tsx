function ChildComponent(props: any){


    let counter = 0;

    return (
        <div>
            <button onClick={() => props.onclick(counter = counter+1)}>Child Button</button>
        </div>
    )
}

export default ChildComponent;
