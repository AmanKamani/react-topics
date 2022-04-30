import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { fetchUsers } from '../redux/users/userSlice';

function UserListComponent() {

    const {loading, error, users} = useSelector((state: AppState) => state.users);
    const dispatch = useDispatch<any>();

    useEffect(() => {
      dispatch(fetchUsers());
    }, []);
    

    return (<>
        <h4>UserList Component</h4>
        {
            loading 
                ? <h5>Loading...</h5>
                : error 
                    ? <p style={{color: "red"}}>{error}</p>
                    : users && users.map((user: any) => <p key={user.id}>{user.name}</p>)
        }
    </>);
}

export default UserListComponent