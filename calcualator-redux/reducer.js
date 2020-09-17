import {CHANGE_INPUT_VALUE,CLICK_C_BUTTON,CLIAC_EVAL,CHANGE_INPUT_E,CLICK_NUMBUTTON_ACTION} from './actionType';
const initialState = {
    evalStr:'',
    result:''
    
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
    case CHANGE_INPUT_VALUE:
        newState.evalStr = action.value;
        return newState;
    case CLICK_C_BUTTON:
        newState.evalStr = '';
        newState.result = '';
        return newState;
    case CLIAC_EVAL:
        newState.evalStr = '';
        newState.result = action.value;
        return newState;
    case CHANGE_INPUT_E:
        newState.evalStr = state.evalStr+action.value;
        newState.result = '';
        return newState;
    case CLICK_NUMBUTTON_ACTION:
        
        newState.evalStr = state.evalStr+action.value;
        return newState;
    default:
        return state;
    }
}
