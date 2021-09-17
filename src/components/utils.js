import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'baseURL',
  // withCredentials: true,
});

function setCookies(token, expires = 2) {
  return Cookies.set('mcc', token, { expires })
}

export { instance, setCookies }
