import React from "react";
import { Link } from "react-router";

const Users = () => {
  const userData = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Baby" },
    { id: 3, name: "Bebu" },
    { id: 4, name: "Mona" },
    { id: 5, name: "Pawan" },
  ];
  return (
    <div>
      List of Users
      {userData.map((element) => {
        return (
          <div>
            <h4>
              <Link to={"/users/" + element.id} state={{ name: element.name }}>
                {element.name}
              </Link>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
