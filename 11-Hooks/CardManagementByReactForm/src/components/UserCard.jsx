import React from "react";

const UserCard = ({ user, handleDelete, setToggle, setEditUser }) => {
  return (
    <>
      <div className="w-[20%] px-2 py-5 shadow-2xl flex items-center flex-col">
        <div className="h-50 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt="user"
          />
        </div>
        <div className="w-full text-center py-3">
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="text-stone-500 text-sm font-semibold">{user.email}</p>
          <p>{user.designation}</p>
          <p>{user.empId}</p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => {
              setEditUser(user);
              setToggle(true);
            }}
            className="bg-gray-800 text-white px-3 py-1 rounded-sm cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(user.id)}
            className="bg-red-800 text-white px-3 py-1 rounded-sm cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
