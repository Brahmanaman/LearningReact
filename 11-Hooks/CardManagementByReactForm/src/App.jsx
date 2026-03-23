import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("Users")) || [],
  );
  let [editUser, setEditUser] = useState(null);

  let handleDelete = (id) => {
    let data = users.filter((user) => user.id !== id);
    setUsers(data);
    localStorage.setItem("Users", JSON.stringify(data));
  };
  return (
    <>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <UserForm
          setToggle={setToggle}
          setUsers={setUsers}
          editUser={editUser}
          setEditUser={setEditUser}
          users={users}
        />
      ) : (
        <div className="h-[90%] p-10">
          <div className="flex gap-5 flex-wrap">
            {users.map((user, idx) => {
              return (
                <UserCard
                  user={user}
                  key={user.id}
                  handleDelete={handleDelete}
                  setToggle={setToggle}
                  setEditUser={setEditUser}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
