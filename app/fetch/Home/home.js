/*
* @Author: char1eschen
* @Date:   2018-08-18 23:55:13
* @Last Modified by:   char1eschen
* @Last Modified time: 2018-08-19 09:21:20
*/
import { get } from '../get'

export function getAdData() {
  const result = get('/api/homead')
  return result
}

export function getListData(city, page) {
  const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
  return result
}
