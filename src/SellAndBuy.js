import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buyButton from "./image/buyButton.png";
import sellButton from "./image/sellButton.png";
import './SellAndBuy.css';
import firebase from './firebase'
import { Button } from 'antd/lib/radio';

import sellLabel from './image/selllabel.png';
import buyLabel from './image/buylabel.png';
const db = firebase.firestore();
class SellAndBuy extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userr:"",

        }
        
        
    }

 

    render() {
        
        return (
            <div class="SellAndBuy">
                <Link to="/SellPage"><img src={sellButton} class="logosell" /></Link>
                <Link to="/BuyPage"><img src={buyButton} class="buylogo" /></Link>
                <div class = "setlb">
                    <img src={sellLabel} id="sellb"/>
                    <img src={buyLabel} id="buylb"/>
                </div>
            </div>
        );
    }

}

export default SellAndBuy;