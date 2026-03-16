import { useState } from "react";

const App = () => {
  let [formValue, setFormValue] = useState({});

  function formHandle(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(formValue);
    setFormValue({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValue.name}
            placeholder="Enter your name"
            onChange={formHandle}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValue.email}
            placeholder="Enter your email"
            onChange={formHandle}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValue.password}
            placeholder="Enter your password"
            onChange={formHandle}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
