import React , { Component } from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
  </div>
  )
}

const Cat = () => {
  return (
    <div>iam cat!!</div>
  )
}

export default App;
