# useMemo Hook

## key difference

1. React.memo = memoize a component
2. useMemo = memoize a value / calculation

## React.Memo

What it does

    Prevents a component from re-rendering

    Re-renders only if props change

    👉 Used for child components

When to use

    ✔ Expensive UI components

    ✔ Child components receiving same props repeatedly

## useMemo

What it does

    Prevents re-calculation of expensive values

    Caches the result of a function not a whole function

    👉 Used inside a component

When to use

    ✔ Heavy calculations

    ✔ Filtering / sorting large arrays

    ✔ Derived data
