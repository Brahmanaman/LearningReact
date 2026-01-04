import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY;

const api = axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    timeout: 5000,
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
})

export function fetchPhotos(query, page = 1, per_page = 20) {
    return api.get("/", {
        params: { query, page, per_page }
    });
}