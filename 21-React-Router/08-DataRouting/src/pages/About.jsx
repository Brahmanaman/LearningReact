import React from "react";
import { useParams } from "react-router";

const About = () => {
  const { id, name } = useParams();
  return (
    <div>
      About- {id} - {name}
    </div>
  );
};

export default About;
