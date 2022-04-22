import ReactDOM from "react-dom";

export const PortalComponent = () => {
    return ReactDOM.createPortal(
        (<>
            <p>Hi Loading in div with id <b>portal-root</b></p>
        </>), 
        document.getElementById("portal-root")!
    );
}