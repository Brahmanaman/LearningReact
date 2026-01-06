import { useSelector, useDispatch } from "react-redux"
import { setResults, setQuery, setError, setLoading, clearResults } from "../redux/features/searchSlice"
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi"
import { useEffect } from "react"

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((state) => state)

    const getData = async () => {
        let data
        if (query.trim() != "") {
             debugger
            if (activeTab == "photos") {
                let response = await fetchPhotos(query);
                data = response.results;
            }

            if (activeTab == "videos") {
                let response = await fetchVideos(query)
                data = response.videos
            }

            if (activeTab == "gif") {
                let response = await fetchGIF(query)
                data = response.results;
            }
            console.log(data)
        }

    }

    useEffect(function () {
        getData()
    }, [query, activeTab])

    return (
        <>

        </>

    )
}

export default ResultGrid