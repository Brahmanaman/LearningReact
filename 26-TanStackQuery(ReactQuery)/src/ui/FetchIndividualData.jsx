import { fetchIndividualData } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import {NavLink} from "react-router";

export const FetchIndividualData = () => {

    const {id} = useParams();

    const {data, isPending, isError, error} = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchIndividualData(id)
    })

    if(isPending) return <p>Loading...</p>
    if(isError) return <p>Error : {error.message || "something went wrong"}</p>

    return (
        <>  
            <div className="post">
                <p>{data.id}</p>
                <p>{data.body}</p>
                <NavLink to="/rq">
                    <button>Go Back</button>
                </NavLink>
                
            </div>
        </>
    )
} 