import Axios from 'axios'

const baseURL = window.location.origin.includes('localhost') ? '' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

// NOTE remember to add the auth headers to any axios instance you need auth on.
export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
