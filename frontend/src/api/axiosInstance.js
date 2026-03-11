import axios from 'axios';

const axiosInsatnce = axios.create(
    {
        baseURL:"http://localhost:3000"
    }
)

export default axiosInsatnce;