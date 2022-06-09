import { actionTypes } from "./actionTypes";

const initialState = {
    user:{
        emailAddress:'aa@bb.com',
        phone:'1'
    }
}

export const userReducer = (state = initialState,action) => {
    if(!state){
        return initialState;
    }
    switch(action.type){
        case actionTypes.SET_USER:
            return {...state,user:action.user}
    }
    return state;
}