import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3001/api/v0/',
})

export default api