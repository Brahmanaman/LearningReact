<!-- ! Problem -->
jab hum koi bhi heavy computation task krte hai to vo bhut jyada time leta hai, jisse hmara ui block ho jata hai jabtak vo computation ho rhi hoti hai.Yeah hmare ui experience ko bekar krta hai

<!-- ? solution -->
Iss problem se bachne k liye hmare pass useTransition() hook hota hai, jo performance ko bda deta hai.
const [isPending, startTransition] = useTransition();
isPending hme btata hai ki transition chl rhi hai ya nhi
jo bhi heavy computation task hote hai jo time lete, jiske vja se hmara ui block ho sakta hai uska hum startTransition mai daal dete hai, ye apne parameter mai callback accept krta hai, jab tak startTransition chlata hai tab tk isPending is value true hoti hai, jab complete ho jata hai tab isPending ki value false ho jati hai.



🔹 What is useTransition?

useTransition is a React hook for performance, not for data fetching.

👉 It tells React:
“Ye state update important nahi hai, ise thoda slow / background me render karo.”

const [isPending, startTransition] = useTransition();

isPending → true when transition render is happening
startTransition(cb) → wraps non-urgent state updates

`import { useState, useTransition } from "react";

function App() {
const [pending, startTransition] = useTransition();
const [count, setCount] = useState(0);

const handleClick = () => {
startTransition(() => {
setCount(c => c + 1);
});
};

return (

<div>
<p>Pending: {pending ? "true" : "false"}</p>
<button onClick={handleClick}>Click</button>
<h1>{count}</h1>
</div>
);
}
`

useTransition = background rendering for better UX

