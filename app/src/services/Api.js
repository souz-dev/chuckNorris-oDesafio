import Axios from 'axios'

const api = Axios.create({

  baseURL:'http://localhost:3005/api/chuck-norris'

})

export default api;

