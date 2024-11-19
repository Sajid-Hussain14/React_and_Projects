import React from "react";  

//Managing state is an essential part of developing applications in React. A common way to manage state is by passing props.
// Passing props means sending data from one component to another. 
//It's a good way to make sure that data gets to the right place in a React application.
//But it can be annoying to pass props when you have to send the same data to lots of components or 
//when components are far away from each other. This can make an application slower and harder to work with.

//Context API allows data to be passed through a component tree without having to pass props manually at every level.
// This makes it easier to share data between components.

const UserContext = React.createContext();
//every context is a provider -- like something global and with context we need to create a provider as well


export default UserContext; 