import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from "../redux/features/searchSlice.js";

const SearchBar = () =>{
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(setQuery(text));
        setText("")
        
    }
    return (
        <>
            <div>
                <form className="flex gap-5 p-10 bg-gray-900" onSubmit={(e) =>{
                    submitHandler(e)
                }}>
                    <input required className="w-full border-2 px-4 py-2 text-xl rounded outline-none" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="search anything..." />
                    <button className="border rounded active:scale-95 px-4 py-2">Search</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar;