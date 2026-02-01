import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-950 text-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
