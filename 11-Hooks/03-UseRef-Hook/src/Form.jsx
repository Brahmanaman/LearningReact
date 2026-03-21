import { useRef, useState } from "react";

const Form = () => {
  let inpRef = useRef({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inpRef.current);
    console.log(inpRef.current.name.value);
    console.log(inpRef.current.email.value);
    console.log(inpRef.current.password.value);
    console.log(inpRef.current.phone.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={(e) => (inpRef.current.name = e)}
            type="text"
            placeholder="enter name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={(e) => (inpRef.current.email = e)}
            type="email"
            placeholder="enter email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={(e) => (inpRef.current.password = e)}
            type="password"
            placeholder="enter password"
          />
        </div>
        <div>
          <label htmlFor="number">Phone</label>
          <input
            ref={(e) => (inpRef.current.phone = e)}
            type="phone"
            placeholder="enter phone no"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
