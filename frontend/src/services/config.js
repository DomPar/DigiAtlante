import axios from "axios";

const api = axios.create({
    baseURL: 'https://digiatlante.onrender.com/api'
})

export default api