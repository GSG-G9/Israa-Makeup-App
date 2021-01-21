
import React, { useState, useEffect, useContext }  from 'react'
import  { Route, Link, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories'
import Home from './components/Home'
import ProductDetails from './components/Search'
import Search from './components/Search'
function App() {
  // const [categoryContent,setCategoryContent]=useState([])
  return (
    // <MakeupContext.Provider value={{categoryContent,setCategoryContent}}>
 <div className="App">
    
    <ul className="navbar">
        <li className="nav_item">
          <Link className="nav_link" to="/">
            Login 
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" to="/search">
            Search
          </Link></li>
        <li className="nav_item">
          <Link className="nav_link" to="/category">
            Categories
          </Link>
        </li>          <li className="nav_item">
          <Link className="nav_link" to="/">
            Home
          </Link>
        </li>
      </ul>
    <Switch>
      <Route exact path="/" component={Home} />
       <Route path="/category" component={Categories} />
       <Route path="/search" component={Search} />
       <Route path="/CategoryContent/:category" render={(props)=><CategoryContent {...props}/>} />
       {/* <Route path="/productDetails/:id" render={(props)=><ProductDetails {...props}/>} /> */}
      {/* <Route path="/category" component={Categories} /> */} */}
    </Switch>
  </div>
    // </MakeupContext.Provider>
   
  );
  }

export default App;
