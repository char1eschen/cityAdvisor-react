/*
* @Author: char1eschen
* @Date:   2018-08-20 22:22:20
* @Last Modified by:   char1eschen
* @Last Modified time: 2018-08-20 22:23:00
*/
import * as actionTypes from '../constants/store'

export function update(data) {
  return {
    type: actionTypes.STORE_UPDATE,
    data
  }
}

export function add(item) {
  return {
    type: actionTypes.STORE_ADD,
    data: item
  }
}

export function rm(item) {
  return {
    type: actionTypes.STORE_RM,
    data: item
  }
}
