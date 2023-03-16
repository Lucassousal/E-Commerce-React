import axios from "axios";

const http = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
})

const api = {
  
  getProducts: async() => {
    const { data } = await http.get('/products')
    return data

  }

}

export default api