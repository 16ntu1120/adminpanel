import { checkUserName } from "../action/action-type";
import { checkPassword } from '../action/action-type';

const state = {
    admin : [{
        userName : 'syedNoman1120',
        password : 'noumanjelani'
    },{
        userName : 'hannanAzmat1116',
        password : 'hannanazmat'
    },{
        userName : 'kanwalNisar1105',
        password : 'kanwalnisar'
    }]
}
const adminReducer = (mstate = clone(state), action) => {
    switch (action.type) {
        case checkUserName : 
            return clone(mstate);
        case checkPassword :
            return clone(mstate);
        default:
            return clone(mstate);
    }
}

export default adminReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj)));
