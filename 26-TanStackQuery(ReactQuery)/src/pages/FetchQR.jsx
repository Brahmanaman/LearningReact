import { fetchPost } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

const FetchQR = () => {
  // Queries
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    // gcTime: 10000,
    // staleTime: 20000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error : {error.message || "something went wrong"}</p>;
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default FetchQR;
