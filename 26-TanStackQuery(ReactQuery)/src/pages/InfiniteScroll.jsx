import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../Api/Api'
import { useEffect } from 'react';

const InfiniteScroll = () => {

    const { isFetchingNextPage, hasNextPage, fetchNextPage, data } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: (pageParam) => fetchUsers(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        }
    })

    useEffect(() => {
        const handleScroll = () => {
            //if scroll reached 80% of the scrollheight fetch next page data
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8) {
                fetchNextPage();
            }

        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasNextPage, isFetchingNextPage])

    return (
        <div>
            {
                data?.pages?.map((page, index) => (
                    <ul key={index}>
                        {
                            page.map((user) => (
                                <li key={user.id} style={{ padding: "10px", border: "1px solid #ccc" }}>
                                    <p>{user.login}</p>
                                    <img src={user.avatar_url} alt="avatar" height={50} width={50} />
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}

export default InfiniteScroll