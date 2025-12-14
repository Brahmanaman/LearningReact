import React from "react";

function card(props) {
  return (
    <>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1630150275481-fdd323506564?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dhoughnut"
        />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </>
  );
}

export default card;
