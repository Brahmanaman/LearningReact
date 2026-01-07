import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-10 bg-blue-900">
        <h2 className="font-medium text-2xl">Search Media</h2>
        <div className="flex gap-5 text-xl items-center">
          <Link
            className="bg-white text-black py-1 px-2 rounded-sm font-semibold"
            to="/"
          >
            Search
          </Link>
          <Link
            className="bg-white text-black py-1 px-2 rounded-sm font-semibold"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
