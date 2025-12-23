import React from "react";
import { useParams, Link, useLocation } from "react-router";

const UserDetails = () => {
  let params = useParams();
  const location = useLocation();
  console.log(location)
  const { name } = location.state || {};

  return (
    <div>
      <h1>User Details Page</h1>
      <h2>User id : {params.id}</h2>
      <h2>User Name: {name}</h2>
      <h3>
        <Link to={"/users"}>go back</Link>
      </h3>
    </div>
  );
};

export default UserDetails;
