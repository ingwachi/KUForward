import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './category.css'
import book from './image/book.png';
import cloth from './image/cloth.png';
import accessory from './image/accessory.png';
import others from './image/others.png';
import headSell from './image/choose1.png';

class Category extends React.Component {
    render(){
        return(
            <div>
                <div><img src={headSell} id="sethead"/></div>
                <Link to="/Test"><img src={book} class="book"/></Link>
                <Link to="/Clothes"><img src={cloth} class="cloth"/></Link>                
                <div>
                    <Link to="/Accessories"><img src={accessory} class="accessory"/></Link>
                    <Link to="/Others"><img src={others} class="others"/></Link>
                </div>

            </div>
        );
    }
}

export default Category;