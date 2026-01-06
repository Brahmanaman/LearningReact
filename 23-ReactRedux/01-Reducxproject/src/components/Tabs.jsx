import { useSelector, useDispatch } from 'react-redux'
import { setActiveTabs } from "../redux/features/searchSlice.js";

const Tabs = () => {
    const tabs = ["photos", "videos", "gif"]
    const dispatch = useDispatch();
    const selectedTab = useSelector((state) => state.activeTab)


    return (
        <>
            <div className="flex gap-5 mt-5 px-10">
                {
                    tabs.map((tab, idx) => {
                        return (
                            <button key={idx} className={`${selectedTab == tab ? "bg-blue-700" : "bg-gray-600 " } py-2 px-4 rounded-md capitalize text-xl cursor-pointer active:scale-95 `}
                            onClick={()=>dispatch(setActiveTabs(tab))}>{tab}</button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tabs;