import React, { useFormStatus } from "react-dom";

const App = () => {
  const { pending, data, method, action } = useFormStatus();
  async function submitForm() {
    console.log(pending);
    await new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
    console.log("form submitted");
    console.log(pending);
  }

  return (
    <>
      <form action={submitForm}>
        <input type="text" placeholder="enter you username" />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your passowrd"
        />
        <br />
        <br />
        <button type="submit">submit form</button>
      </form>
    </>
  );
};

export default App;
