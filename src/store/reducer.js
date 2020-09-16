import * as constants from './constants';
const defaultState={
    evalStr:'',
    result:''
}
const newState=JSON.parse(JSON.stringify(defaultState));//深度拷贝state
export default (state=defaultState,action)=>{
    if(action.type===constants.CHANGE_INPUT){
        newState.evalStr=action.value;
        return newState;
    }
    if(action.type===constants.CLICK_FUNCS){
        newState.evalStr=action.evalStr;
        newState.result=action.result;
        return newState;
    }
    if(action.type===constants.CLICK_NUMS){
        newState.evalStr=action.value;
        return newState;
    }
    return state;
}