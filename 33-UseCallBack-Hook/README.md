# UseCallback Hook

UseCallback hook is used to memoize the function, it prevent function to not create a new instance if props does not change

# Important thing about useCallback

    If you use UseCallback hook is used to memoize the function, it prevent function to not create a new instance if props does not change but it does not prevent you component to re-render
    so you have to use React.memo to prevent component re-render

    **Best way to use useCallback**

    use useCallback + React.memo
