import request from 'utils/request'

export function userLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}