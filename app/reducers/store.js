/*
* @Author: char1eschen
* @Date:   2018-08-20 22:53:21
* @Last Modified by:   char1eschen
* @Last Modified time: 2018-08-20 23:10:08
*/
import * as actionTypes from '../constants/store'

const initialState = []

export default function userinfo(state = initialState, action) {
  switch (action.type) {
  case actionTypes.USERINFO_UPDATE:
    return action.data
  case actionTypes.STORE_ADD:
    state.unshift(action.data)
    return state
  case actionTypes.STORE_RM:
    return state.filter(item => {
      if (item.id !== action.data.id) {
        return item
      }
    })
  default:
    return state
  }
}
