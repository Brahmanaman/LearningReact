// import React from "react";
// import { forwardRef } from "react";


// //Before React 19
// const ChildComponent = (props, ref) => {
//   return <div>
//     <input
//         type="text"
//         name="name"
//         id="name"
//         ref={ref}
//         placeholder="enter you name"
//       />
//   </div>;
// };

// export default forwardRef(ChildComponent);


// ! In And After React 19

const ChildComponent = (props) => {
  return <div>
    <input
        type="text"
        name="name"
        id="name"
        ref={props.ref}
        placeholder="enter you name"
      />
  </div>;
};

export default ChildComponent;

