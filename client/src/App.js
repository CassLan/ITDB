import React, { Fragment } from 'react'; 
import './App.css';


//components
import InputTodo from "./components/InputApplication";
import ListTodos from "./components/ListApplications";




function App() {
  return (
  <div id='root' className='container'>
    <InputTodo />
    <ListTodos />
  </div>
  );
}

export default App;
