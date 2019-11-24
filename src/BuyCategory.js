import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './category.css'
import book from './image/book.png';
import cloth from './image/cloth.png';
import accessory from './image/accessory.png';
import others from './image/others.png';
import headBuy from './image/choose2.png';

class BuyCategory extends React.Component {
    render() {
        return (
            <div>
                <div class="sethead"><img src={headBuy} id="sethead"/></div>
                <Link to="/BooksStore"><img src={book} class="book" /></Link>
                <Link to="/ClothesStore"><img src={cloth} class="cloth" /></Link>
                <div>
                    <Link to="/AccessoriesStore"><img src={accessory} class="accessory" /></Link>
                    <Link to="/OthersStore"><img src={others} class="others" /></Link>
                </div>

            </div>
        );
    }
}

export default BuyCategory;