export default function calculator(state = { evalStr: '', result: '' }, action) {
    switch (action.type) {
        case 'CHANGE_EVAL_STR':
            return { ...state, evalStr: action.str }
        case 'CHANGE_RESULT_STR':
            return { ...state, result: action.res }
        case 'CHANGE_EVAL_RESULT_STR':
            return { ...state, result: action.res, evalStr: action.str }
        default:
            return state
    }
}

export function userInfo(state = { name: '', email: '', msg: '', loading: '', score: 0 }, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.str }
        case 'CHANGE_EMAIL':
            return { ...state, email: action.str }
        case 'CHANGE_REQUEST_SATE':
            return { ...state, loading: action.loading }
        case 'REQUEST_SUCCESS':
            return { ...state, ...action.data }
        default:
            return state
    }
}