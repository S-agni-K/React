// import React from "react";
// import ReactDOM from "react-dom/client";
// //React Element
// const Title = () => (<h1 className="head" tabIndex="1">
//     Basic React using JSX
//     </h1>); 

// //React Component
// //Class Based Component - OLD
// //Functional Component - New

// //React Functional Component always starts with Capital letter. Its like an arrow function which returns JSX.
// const HeadingComponent = () =>{
//     return <h1>Basic React Functional Component</h1>
// }
// //Same as above, removing {} means its using return. In case of multi line add (). We can add <div> to this multiline()
// const HeadingComponent2 = () =>
//     <h1>Basic React Functional Component</h1>
// //Using Title component inside of another component...This is component Composition
// const HeadingComponent3 = () =>{
//     return (
//         <div id="container">
//             <Title />
//     <h1>Basic React Functional Component</h1>
//         </div>
//     )
//         }

// const root = ReactDOM.createRoot(document.getElementById("root"))

// //root.render(heading); // This is used to render element
// root.render(<HeadingComponent3 />); // This is used to render component. < /> are must as Bebal understands this





import React from "react";
import ReactDOM from "react-dom/client";

//React Element inside React Element
const elem = <span>React Element</span>
//React Element
const title = (<h1 className="head" tabIndex="1">
    {elem}
    Basic React using JSX
    </h1>); 
const TitleComponent = () => (<h1 className="head" tabIndex="1">
    {elem}
    Basic React using JSX
    </h1>); 
//By adding {} we can add whatever text inside the compoment and also elements.
//We can add functional components as functions inside the another component...Same thing of using the Title Component
const num = 10000;
const HeadingComponent = () =>{
    return (
        <div id="container">
            {title}
            {TitleComponent()}
            <TitleComponent />
            <TitleComponent></TitleComponent>
        <h2>{100+200}</h2>
        {num}
        {console.log(num)}
    <h1>Basic React Functional Component</h1>
        </div>
    )
        }

const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(heading); // This is used to render element
root.render(<HeadingComponent />); // This is used to render component. < /> are must as Bebal understands this