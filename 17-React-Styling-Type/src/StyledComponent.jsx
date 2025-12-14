import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  //   const H1 = styled.h1`
  //     color: red;
  //     border: 2px solid red;
  //     padding: 10px;
  //     border-radius: 10px;
  //   `;

  const H1 = styled.h1({
    color: "red",
    border: "2px solid red",
    padding: "10px",
    borderRadius: "10px",
  });

  return <H1>Styled Component</H1>;
};

export default StyledComponent;
