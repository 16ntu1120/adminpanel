import {checkUserName} from "./action-type";
import {checkPassword} from './action-type';
export const checkuser = (username) => dispatch =>{
    const state = {
        type:checkUserName ,
        payload : username
    }
    dispatch(state);
}
export const checkpassword = (password) => dispatch =>{
    const state = {
        type:checkPassword ,
        payload : password
    }
    dispatch(state);
}

