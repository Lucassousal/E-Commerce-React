import axios from "axios";

const http = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  params: {
    limit: 40,
    offset:0
  }
})

export const getProducts = async() => {
    const { data } = await http.get('/products')
    return data
}
