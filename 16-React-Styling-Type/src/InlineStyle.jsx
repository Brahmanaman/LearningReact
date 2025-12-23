import React from "react";
import { useState } from "react";

const InlineStyle = () => {
  const [cardStyle, setCardStyle] = useState({
    border: "2px solid gray",
    borderRadius: "5px",
    padding: "10px",
    height: "300px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "5px 5px 10px 5px black",
  });

  const updateTheme = () => {};

  //object styling
  const card = {
    border: "2px solid gray",
    borderRadius: "5px",
    padding: "10px",
    height: "300px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "5px 5px 10px 5px black",
  };

  return (
    <>
      <div style={{marginBottom:"10px", display:"flex", gap:"10px", justifyContent:"center"}}>
        <button>Gray Theme</button>
        <button>Default Theme</button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            border: "2px solid gray",
            borderRadius: "5px",
            padding: "10px",
            height: "300px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "5px 5px 10px 5px black",
          }}
        >
          <div
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg"
              alt=""
            />
          </div>
          <div>
            <h2>Aman Sharma</h2>
            <p>Software Engineer</p>
          </div>
        </div>
        <div style={card}>
          <div
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg"
              alt=""
            />
          </div>
          <div>
            <h2>Aman Sharma</h2>
            <p>Software Engineer</p>
          </div>
        </div>
        <div style={card}>
          <div
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg"
              alt=""
            />
          </div>
          <div>
            <h2>Aman Sharma</h2>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InlineStyle;
