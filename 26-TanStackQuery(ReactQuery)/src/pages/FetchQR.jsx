import React from "react";
import { fetchPost } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";

const FetchQR = () => {
  // Queries
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error : {error.message || "something went wrong"}</p>;
  return (
    <>
      <div>
        {data?.map((post, idx) => {
          return (
            <div key={idx} className="post">
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchQR;
