import React  from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

const App = () => {
  const profiles = [
    {name: 'kenta', age : 25,},
    {name:'kazuki', age:99,},
    {name:'ryu' }
  ]
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
  </div>
  )
}

const User = (props) => {
  return (
    <div>i am {props.name} and {props.age} years old</div>
  )
}
User.defaultProps = {
  name: 'Noname',
  age: 1
}

export default App;
