import { fetchPost } from "../Api/Api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router";

const FetchQR = () => {
  const [pageNumber, setPageNumber] = useState(0);
  // Queries
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPost(pageNumber),
    placeholderData: keepPreviousData,
    // gcTime: 10000,
    // staleTime: 20000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error : {error.message || "something went wrong"}</p>;
  return (
    <>
      <div className="post-container">
        {data?.map((post) => {
          return (
            <div key={post.id} className="post">
              <NavLink to={`/rq/${post.id}`}>
                <p>{post.id}</p>
                <p>{post.body}</p>
              </NavLink>
            </div>
          );
        })}
        <div className="dvbtn">
          <button onClick={() => setPageNumber((prev) => prev - 10)}>
            Prev
          </button>
          <h2>{pageNumber / 10 + 1}</h2>
          <button onClick={() => setPageNumber((prev) => prev + 10)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FetchQR;
