import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppState, { UserState } from '../redux/state';
import { fetchUsers } from '../redux/user/userActions';

function Usercontainer() {
 
    const {loading, error, data} = useSelector<AppState, UserState>(state => state.users);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
 

    return (<>
        <h4> User Container </h4>
        {
            loading ? 
                <h5>Loading...</h5> :
                error ?
                    <p style={{color: "red"}}>{error}</p> : 
                    <div>
                        <h5>User List</h5>
                        {
                            data.map(user => <p key={user.id}>{user.name}</p>)
                        }
                    </div>
        }
        {

        }
    </>)
}

export default Usercontainer