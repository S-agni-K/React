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
// const parent = React.createElement("div",{id:"parent"},
//     [React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"Parent to Child1 to h1 tag"),
//     React.createElement("h2",{},"Parent to Child1 to h2 tag"),]),
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"Parent to Child2 to h1 tag"),
//     React.createElement("h2",{},"Parent to Child2 to h2 tag")])]
//     //When there are 2 children , we need to create an array of children
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//EP-2
// import React from "react";
// import ReactDOM from "react-dom/client";
// const parent = React.createElement("div",{id:"parent"},
//     [React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"This is react course starter"), //As soon as we save , the changes will get reflected and get saved. Reason is PARCEL
//     React.createElement("h2",{},"Parent to Child1 to h2 tag"),]),
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"Parent to Child2 to h1 tag"),
//     React.createElement("h2",{},"Parent to Child2 to h2 tag")])]
//     //When there are 2 children , we need to create an array of children
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//EP-3
// import React from "react";
// import ReactDOM from "react-dom/client";
// //React.createElement => Object => HTMLElement(render)
// const heading = React.createElement(
//     "h1",{ id: "heading" },"Basic React"
// );
// console.log(heading)
// //JSX has a structure which is similar to HTML(HTML like syntax)
// //JSX => Babel transpiles to React.createElement => ReactElement-Js Object => HTML Element(render)
// const jsxheading = <h1 id="heading">Basic React using JSX</h1>;
// console.log(jsxheading)
// //The above two lines are same. Heading is in React and jsxheading is in JSX
// const root = ReactDOM.createRoot(document.getElementById("root"))
// //root.render(heading);
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
// In jsx, it uses camelfont [className and tabIndex] but HTML uses class and tabindex
const jsxheading = (<h1 className="head" tabIndex="1">
    Basic React using JSX
    </h1>); //ForMultiline () are mandatory to help jsx identity thr start and end of tags
console.log(jsxheading)
//The above two lines are same. Heading is in React and jsxheading is in JSX
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading);
root.render(jsxheading);