import {CHANGE_INPUT_VALUE,CLICK_C_BUTTON,CLIAC_EVAL,CHANGE_INPUT_E,CLICK_NUMBUTTON_ACTION} from './actionType';

export const inputchange = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const actionclick_c = () =>({
    type:CLICK_C_BUTTON,
    
});
export const actionclick_eval = (value) =>({
    type:CLIAC_EVAL,
    value,
    
});
export const change_input_e = (value) => ({
    type:CHANGE_INPUT_E,
    value,
});

export const numClick = (value) =>({
    type:CLICK_NUMBUTTON_ACTION,
    value
});

