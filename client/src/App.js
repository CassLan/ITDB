import React, { Fragment } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

//components
import InputApplication from "./components/InputApplication";
import ListApplications from "./components/ListApplications";
import InputVendor from "./components/InputVendor";
import ListVendors from "./components/ListVendors";
import Header from "./components/Header";


function App() {
    return (
      <Router>
        <Route path='/Applications' exact render={(props) => (
          <>
          <div id='root' className='container'>
            <Header selection="Applications" />
            <InputApplication />
            <ListApplications />
          </div>
          </>
        )}>
        </Route>

        <Route path='/Vendors' exact render={(props) => (
          <>
          <div id='root' className='container'>
            <Header selection="Vendors" />
            <InputVendor />
            <ListVendors />
          </div>
          </>
        )}>
        </Route>

        <Route path='/' exact render={(props) => (
          <>
          <div id='root' className='container'>
            <Header />
            <InputApplication />
            <ListApplications />
          </div>
          </>
        )}>
        </Route>


      </Router>
      );
} 

export default App;
