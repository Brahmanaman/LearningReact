import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const FetchInfiniteUser = () => {
  const [pageIndex, setPageIndex] = React.useState(0);

  const fetchUser = async ({ pageParam = 1 }) => {
    const limit = 10;
    const skip = (pageParam - 1) * limit;
    const data = await axios.get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`);
    return data.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, hasPreviousPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchUser,
    getNextPageParam: (lastPage, page) => {
      const total = lastPage.total;
      const currentData = page.length * 10;
      if (currentData >= total) return undefined;
      return page.length + 1;
    },
  });

  const fetchNextPageData = async () => {
    const result = await fetchNextPage();
    if (result.isSuccess) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const currentPage = data?.pages?.[pageIndex];

  

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          disabled={!hasNextPage}
          className={` border rounded-sm ${hasNextPage ? "bg-blue-500 cursor-pointer" : "cursor-not-allowed bg-blue-300"}`}
          onClick={() => fetchNextPage()}
        >
          FetchInfiniteUser
        </button>
        <div className="flex gap-5">
          <button
            onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
            disabled={pageIndex === 0}
            className={` ${hasPreviousPage ? "cursor-pointer bg-green-500" : "cursor-not-allowed bg-green-100 text-black"} rounded-md cursor-pointer`}
          >
            {" "}
            Prev
          </button>
          <button
            onClick={() => {
              if (pageIndex === data.pages.length - 1 && hasNextPage) {
                fetchNextPageData();
              } else {
                setPageIndex((prev) => prev + 1);
              }
            }}
            disabled={!hasNextPage && pageIndex === data?.pages.length - 1}
            className={` ${hasNextPage ? "cursor-pointer bg-green-500" : "cursor-not-allowed bg-green-100 text-black"} rounded-md cursor-pointer`}
          >
            {" "}
            Next{" "}
          </button>
        </div>
        {currentPage?.products?.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FetchInfiniteUser;
