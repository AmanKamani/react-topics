import {useAuth} from "../auth/auth";
import {useNavigate} from "react-router-dom";

const ProfileComponent = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const onHandleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (<>
        {
            auth.user && <div>
                <p>Welcome <strong>{auth.user.username}</strong></p>
                <br />
                <button onClick={onHandleLogout}>Logout</button>
            </div>
        }
    </>);
}

export default ProfileComponent;