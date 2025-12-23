import React from "react";
import { useReducer } from "react";

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialValue)
  const [count, abc] = useReducer(IncDec, 0);

  function IncDec(count, action) {
    if (action.type == "INC") {
      return (count += 1);
    }
    if (action.type == "DESC") {
      if (count <= 0) return 0;
      return (count -= 1);
    }
  }

  return (
    <>
      <h1>Use Reducer Hook</h1>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            abc({
              type: "INC",
            });
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            abc({
              type: "DESC",
            });
          }}
          style={{ marginLeft: "10px" }}
        >
          DECREMENT
        </button>
      </div>
    </>
  );
};

export default App;
