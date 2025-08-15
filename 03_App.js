// const heading = React.createElement("h1", 
//     {id: "heading", xyz: "abc"}, "Hello World from React!");
// //console.log(heading)  //returns object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* <div id="parent">
    <div id="child1">
        <h1>Parent to Child to h1 tag"</h1>
        <h1>Parent to Child to h2 tag"</h1>
    </div>
    <div id="child2">
        <h1>Parent to Child to h1 tag"</h1>
        <h1>Parent to Child to h2 tag"</h1>
    </div>
</div>  Architecture of below structure 
*/
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"Parent to Child1 to h1 tag"),
    React.createElement("h2",{},"Parent to Child1 to h2 tag"),]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Parent to Child2 to h1 tag"),
    React.createElement("h2",{},"Parent to Child2 to h2 tag")])]
    //When there are 2 children , we need to create an array of children
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);