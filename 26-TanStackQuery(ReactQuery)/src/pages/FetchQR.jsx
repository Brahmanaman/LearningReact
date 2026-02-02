import React from "react";
import { fetchPost } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";

const FetchQR = () => {
  // Queries
  const posts = useQuery({ queryKey: ["posts"], queryFn: fetchPost });

  return (
    <>
      <div>
        {posts.data?.map((post) => {
          return (
            <div className="post">
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchQR;
