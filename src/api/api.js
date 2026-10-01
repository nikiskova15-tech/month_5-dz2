import axios from "axios"

export const BASE_API = "https://dummyjson.com"

export const api = axios.create ({
    baseURL: BASE_API, 
    headers: {
        "Content-Type": "application/json"
    },
})