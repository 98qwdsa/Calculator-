import * as constants from './constants'

export const changeEvalAction = (data) => {
  return {
    type: constants.CHANGE_EVAL,
    data
  }
}

export const changeResultAction = (data) => {
  return {
    type: constants.CHANGE_REASULT,
    data
  }
}