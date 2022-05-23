import { actionTypes } from "./actionTypes";

const initialState = {
    user:{
        email:'aa@bb.com',
        name:'ruti'
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