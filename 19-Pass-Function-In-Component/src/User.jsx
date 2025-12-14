import React from "react";

const User = ({ displayName, name }) => {
  // const name = "aman sharma";
  return (
    // <div style={{margin:"10px"}}>
    //   <button style={{padding:"10px"}}
    //     onClick={()=>displayName(name)}
    //   >
    //     Display User
    //   </button>
    // </div>
    <div style={{ margin: "10px" }}>
      <button style={{ padding: "10px" }} onClick={() => displayName(name)}>
        Display User
      </button>
    </div>
  );
};

export default User;
