import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'https://playground.sandbox.fabrique.ai/dev001/mcc/',
  // withCredentials: true,
});

function setCookies(token, expires = 2) {
  return Cookies.set('mcc', token, { expires })
}

export { instance, setCookies }
