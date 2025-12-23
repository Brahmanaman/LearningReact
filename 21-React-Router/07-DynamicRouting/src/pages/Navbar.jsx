import { Link, Outlet } from "react-router";
import "./header.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div>
          <Link className="link">
            <h2>Logo</h2>
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/company/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/company/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/college">
                College
              </Link>
            </li>
            <li>
              <Link className="link" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
