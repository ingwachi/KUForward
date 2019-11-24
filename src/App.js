import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SellAndBuy from './SellAndBuy';
import Category from './Category';
import Test from './GetInput/Test';
import Accessary from './GetInput/Accessary';
import BookStore from './ShowData/BookStore';
import Shirt from './GetInput/Shirt';
import Others from './GetInput/Others';
import AccessaryStore from './ShowData/AccessoriesStore';
import BuyCategory from './BuyCategory';
import ClothesStore from './ShowData/ClothesStore';
import OthersStore from './ShowData/OthersStore';



class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/SellAndBuy' component={SellAndBuy} />
          <Route path='/SellPage' component={Category}/>
          <Route path='/BuyPage' component={BuyCategory}/>
          <Route path='/Test' component={Test}/>
          <Route path='/Book' component={BookStore}/>
          <Route path='/Accessories' component={Accessary}/>
          <Route path='/AccessoriesStore' component={AccessaryStore}/>
          <Route path='/BooksStore' component={BookStore}/>
          <Route path='/ClothesStore' component={ClothesStore}/>
          <Route path='/OthersStore' component={OthersStore}/>
          <Route path='/Clothes' component={Shirt}/>
          <Route path='/Others' component={Others}/>
          {/* <Route path='/TestFlexPage/Book' component={BookStore} /> */}
          {/* <Route path="/TestFlexPage" component={TestFlexPage}/> */}
          {/* <Route path='/TestFlexPage/Book' component={BookStore} /> */}
        </Switch>
      </Router>
      // <div><Test/></div>
    );
      
    
  }
}

export default App;