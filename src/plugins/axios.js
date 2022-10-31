import store from '@/store';
import axios from 'axios';
const URI = 'http://localhost:3300/zayavki/';
const axiosConfig = axios.create({
    // url: URI,
    baseURL: URI,

});

axiosConfig.interceptors.request.use(request => {
    console.log("Ketishdan avval");
    store.state.isLoading = true;
    return request;
});

axiosConfig.interceptors.response.use(response => {
    store.state.isLoading = false;
    return response;
})


// axios



export default axiosConfig;