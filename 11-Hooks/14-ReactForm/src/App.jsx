import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let { register, handleSubmit, reset } = useForm();
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1>React hook form</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <input
            {...register("name")}
            type="text"
            className="border-2"
            placeholder="name"
          />{" "}
          <br /> <br />
          <input
            {...register("email")}
            type="text"
            className="border-2"
            placeholder="Email"
          />{" "}
          <br /> <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
