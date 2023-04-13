import {authAction} from '../actions/authAction';

const initState = {
    userDetails:null,
};

const reducer = (state=initState,action)=>{
    switch(action.type){
        case authAction.SET_USER_DETAILS:
            return {
                ...state,
                userDetails:action.userDetails
            };
        default:
            return state;
    }
};

export default reducer;