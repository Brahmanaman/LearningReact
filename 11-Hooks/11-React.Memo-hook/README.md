# React Memo hook

React.Memo hook is used to stop unneccessary re-rendering of a component

1. It remembers the result of a component
2. If props does not change,React reuse the previous render

# Why do we need memo?

1. When a parent component render, all childs also re-render
2. Even the child props are same
   This can slow down the performance

# how memo works

Old Props === New Props ?
Yes → Skip render
No → Re-render

⚠️ This is a shallow comparison

// Primitive values (works fine)
5 === 5 → true

// Objects & arrays (new reference)
{} === {} → false
[] === [] → false

if the refrence datatype are passed in a component, on every render it create a new refrence of it and React.Memo failed here

1. To tackel with probem we have next hook React.useMemo

or we can create a function in React.Memo hook which takes a 2 areguments, prevProps and nextProps

const Child = React.memo(
({ count }) => {
console.log("Rendered");
return <h2>{count}</h2>;
},
(prevProps, nextProps) => {
return prevProps.count === nextProps.count;
}
);
