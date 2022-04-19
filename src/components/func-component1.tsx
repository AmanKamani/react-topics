const FunctionComponent1 = () => {

    const clickHandler = () => {
        alert("You clicked!!");
    };

    return (
        <div>
            <button onClick={clickHandler}>Click Function Component</button>
        </div>
    )
};

export default FunctionComponent1;