import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function clear() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submit");
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter you password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter you email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <br />
        <div>
          <button>Submit</button>
          <button onClick={clear}>Clear</button>
        </div>
      </form>
    </>
  );
}

export default App;
