export default (state = { evalStr: '', resultStr: '' }, action) => {
    switch (action.type) {
        case 'CHANGE_EVAL_STR':
            return { ...state, evalStr: action.str }
        case 'CHANGE_RESULT_STR':
            return { ...state, resultStr: action.res }
        case 'CHANGE_EVAL_RESULT_STR':
            return { ...state, resultStr: action.res, evalStr: action.str }
        default:
            return state
    }
}