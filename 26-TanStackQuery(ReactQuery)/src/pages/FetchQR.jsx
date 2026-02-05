import { deletePost, fetchPost } from "../Api/Api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router";

const FetchQR = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient()
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

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueriesData(["posts", pageNumber], (previousData) => {
        return previousData?.filter(post => post.id !== id) || [];
      })
    },
    onError: () => queryClient.invalidateQueries({ queryKey: ["posts"] })
  })




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
              <button style={{ padding: "5px 10px", marginTop: "10px", cursor: "pointer", backgroundColor: "maroon", outline: "none", border: "none", color: "white", borderRadius: "5px" }} onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
              <button style={{ padding: "5px 10px", marginTop: "10px", cursor: "pointer", backgroundColor: "green", outline: "none", border: "none", color: "white", borderRadius: "5px", marginLeft: "10px" }} onClick={() => updateMutation.mutate(post.id)}>Update</button>
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
