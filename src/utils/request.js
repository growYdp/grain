import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 60000
})

export default service