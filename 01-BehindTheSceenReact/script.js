// let h1 = document.createElement("h1")
// h1.textContent = "hello"
// console.log(h1)

function hello() {
    return 123
}

let h1 = React.createElement("h1", {}, "heelo from react")
let h2 = React.createElement("h2", {}, "heelo from react")

ReactDOM.createRoot(document.getElementById("root")).render([h1, h2])
