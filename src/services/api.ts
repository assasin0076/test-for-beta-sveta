import axios from "axios"
import qs from "qs"

const api = axios.create({
  timeout: 15000,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params),
  },
})

export default api
