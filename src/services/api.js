import axios from 'axios';
const api = axios.create({
    //baseURL: 'http://192.168.15.3:3002'
    baseURL: 'http://127.0.0.1:5000'
    
})

export default api