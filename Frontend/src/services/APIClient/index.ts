import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
})

const setToken = (token?: string) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}

class APIClient<T> {
    endpoint: string;
    token?: string;

    constructor(endpoint: string, token?: string) {
        this.endpoint = endpoint;
        this.token = token;
        setToken(token);
    }

    getAll = () => {

        return axiosInstance
            .get<T[]>(this.endpoint, {
                params: {
                    pagination: false
                }
            })
            .then(res => res.data);
    }

    getDetail = () => {

        return axiosInstance
            .get<T>(this.endpoint)
            .then(res => res.data);
    }

    getImage = () => {

        return axiosInstance
            .get<T>(this.endpoint, {
                responseType: 'blob'
            })
            .then(res => res.data);
    }

    post = <P>(data: T) => {

        return axiosInstance
            .post<P>(this.endpoint, data)
            .then(res => res.data);
    }

    put = (data: T) => {

        return axiosInstance
            .put<T>(this.endpoint, data)
            .then(res => res.data);
    }

    delete = () => {

        return axiosInstance
            .delete<T>(this.endpoint)
            .then(res => res.data);
    }

    auth = <P>(data: T) => {
        return axiosInstance
            .post<P>(this.endpoint, data)
            .then(res => res.data);
    }
}

export default APIClient;
