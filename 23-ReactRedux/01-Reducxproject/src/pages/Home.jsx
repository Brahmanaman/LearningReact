import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";


const Home = () => {
  const query = useSelector((state) => state.query);
  return (
    <>
      <SearchBar />
      {query != "" ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
