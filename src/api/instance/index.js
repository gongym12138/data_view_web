import request from '../../utils/request'
import dataViewBaseUrl from '../baseUrl'

export function getInstancePage(params) {
  return request({
    url: dataViewBaseUrl + 'screen_instance',
    method: 'get',
    params
  })
}

export function getScreenInstanceParams(params) {
  return request({
    url: dataViewBaseUrl + 'screen_instance/' + params,
    method: 'get'
  })
}

export function deleteScreenInstance(params) {
  return request({
    url: dataViewBaseUrl + 'screen_instance/' + params,
    method: 'delete'
  })
}

export function saveScreenInstanceParams(params) {
  return request({
    url: dataViewBaseUrl + 'screen_instance',
    method: 'post',
    data: params
  })
}

export function updateScreenInstanceParams(params) {
  return request({
    url: dataViewBaseUrl + 'screen_instance',
    method: 'put',
    data: params
  })
}

