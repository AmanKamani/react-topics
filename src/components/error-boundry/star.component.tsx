export const StarComponent = ({name}: any) => {

    if(name === "Joker")
        throw new Error("Joker name is not allowed.")

    return (<>
        <p>{name}</p>
    </>);
}