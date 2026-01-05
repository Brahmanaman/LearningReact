import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY;
const TENO_KEY = import.meta.env.VITE_TENOR_KEY;

const api = axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    timeout: 5000,
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
})

export async function fetchPhotos(query, page = 1, per_page = 20) {
    const resp =  await api.get("/", {
        params: { query, page, per_page }
    });
    return resp.data;
}

// video api

const pexelApi = axios.create({
    baseURL:"https://api.pexels.com/videos/search",
    timeout:5000,
    headers:{Authorization: `${PEXEL_KEY}`}
})

export async function fetchVideos(query, page = 1, per_page = 20){
    const resp = await pexelApi.get("/", {
        params:{query, page, per_page}
    })

    return resp.data;
}

// gif api

const gifApi = axios.create({
    baseURL:"https://tenor.googleapis.com/v2/search",
    timeout: 5000,
    params:{key: `${TENO_KEY}`}
})


export async function fetchGIF(query, limit=20){
    const resp = await gifApi.get("/", {
        params: {q: query,limit,}
    })

    return resp.data;
}
