import React from "react";
import { useId } from "react";

const App = () => {
  return (
    <div>
      <h1>UseId hook</h1>
      <Form />
      <hr />
      <Form />
    </div>
  );
};

export default App;

function Form() {
  const id = useId();
  return (
    <>
      <label htmlFor={id + "name"}>user name</label>
      <input id={id + "name"} type="text" placeholder="enter username" />
      <br />
      <label htmlFor={id + "password"}>PassWord</label>
      <input
        type="password"
        name="password"
        id={id + "password"}
        placeholder="enter password"
      />
    </>
  );
}
