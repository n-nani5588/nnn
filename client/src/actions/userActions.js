import axios from 'axios';
import {GET_USERS,ADD_USERS,DELETE_USERS, USERS_LOADING,LOGIN_USER,LOGOUT_USER} from './types';

export const getUsers = () => dispatch => {
dispatch(setUsersLoading());
axios 
.get('/api/users')
.then(res => 
    dispatch({
          type:GET_USERS,
          payload: res.data
    })
    )
};

export const loginUser = () => {
    return {
        type: LOGIN_USER,
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}
export const setUsersLoading = ()=>{
    return{
        type: USERS_LOADING,
    }
}
 