

import {GET_USERS,ADD_USERS,DELETE_USERS,USERS_LOADING, LOGIN_USER, LOGOUT_USER} from '../actions/types';


const initialState = {
    users:[],
    loading: false,
    login:false
}

export default function(state= initialState,action){
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        case LOGIN_USER:
            console.log("user");
            return{
                ...state,
                login:true
            }
        case LOGOUT_USER:
            return {
              ...state,
              login:false
            }

        case USERS_LOADING:
            return {
                ...state,
                loading: true
             }
    
        default:
            return state;
    }
}