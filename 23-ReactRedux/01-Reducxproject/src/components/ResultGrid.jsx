import { useSelector, useDispatch } from "react-redux";
import {
  setResults,
  setQuery,
  setError,
  setLoading,
  clearResults,
} from "../redux/features/searchSlice";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  try {
    const getData = async () => {
      let data;
      if (query.trim() != "") {
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.content_description || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      }
    };

    useEffect(
      function () {
        getData();
      },
      [query, activeTab]
    );
  } catch (error) {
    dispatch(setError(error.message));
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center w-full p-10">
        {results.map((item, idx) => {
          return (
            <div key={idx}>
              <div>
                <ResultCard item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResultGrid;
