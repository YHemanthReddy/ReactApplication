let nested =  React.createElement("div", {
'id' : "parentId"
}, React.createElement("h1", {
    'id' : "heading"
    },"This is nested Heading"));
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);