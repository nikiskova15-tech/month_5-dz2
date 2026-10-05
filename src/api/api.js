import axios from "axios"

const BASE_API = "https://dummyjson.com"
export const API = "https://jsonplaceholder.typicode.com"

export const api = axios.create ({
    baseURL: API, 
    headers: {
        "Content-Type": "application/json"
    },
})