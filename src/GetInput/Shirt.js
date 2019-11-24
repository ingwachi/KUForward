import React ,{Component} from 'react';
import {Button} from 'antd';
import firebase from '../firebase'
import 'antd/dist/antd.css';
import '../Component/AddInfoPage.css'
import Login from '../Login';
import ImageUpload from '../Component/ImageUpload';
import { Input } from 'antd';
import BookStore from '.././ShowData/BookStore';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import headertest from '../image/headertest.png';
import footertest from '../image/footertest.png';
import SellAndBuy from '../SellAndBuy.js';
import headClothes from '../image/cateClothes.png';
const db = firebase.firestore();


const { TextArea } = Input;


class Shirt extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            key : "value",
            key2 : 3,
            Title : "",
            Details : "",
            Contact : "",
            Price : "",
            ImageLink : "",
            outputUser: ""

        }
    }
    DisplayName = (outputUser) =>{
        this.setState({outputUser})
      }
    ImageLink = (url) =>{
        this.setState({url})
      }
    componentDidMount(){
        db.collection('stockShirt').get().then((snapshot)=>{
            snapshot.forEach(doc=>{
                // console.log(doc.data())
            });
        });
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user.uid);
            console.log(user.displayName);
            var outputUser = user.displayName
            this.setState({ outputUser })
            
        });
        
     
    }

    addEventListener = e=>{
        e.preventDefault();
        db.collection('stockShirt').add({
            Title: this.state.Title,
            Details:this.state.Details,
            Contact:this.state.Contact,
            Price:this.state.Price,
            ImageLink:this.state.url,
            // UserId:this.state.UserId
            
        }) 
        .then(docRef => {
            console.log("add success~") 
            window.location.href = "/ClothesStore"
        })  
    }

    showItem = () => {
        var wholeData = [];
        db.collection('stockShirt').get().then((snapshot)=>{
            snapshot.forEach(doc =>{
                let temp = []
                temp.push(doc.id)
                temp.push(doc.data())
                wholeData.push(temp)
            });
            console.log(wholeData)
            this.setState({allData:wholeData})
        })
    }
   

    onchangeTextInput = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        }, console.log(this.state))
    }
    
    render(){
        
        return (
            <div className="AddInfoPage">
                 <h1 id="loginName" style={{ marginBottom: '0px' }}> {this.state.outputUser}</h1>
                {/* <h1>{this.state.userr}</h1> */}
                {/* <SellAndBuy returnDisplayName={this.DisplayName}/> */}
                <img src={headertest} id="setimg" />
                <div>
                    <img src = {headClothes} id ="headbookct"/>
                </div>
                <div>
                    <div className="fieldInputTitle">
                        <label>Title : </label>
                        <Input placeholder="Title" size="large" onChange={this.onchangeTextInput} type="text" name="Title" class="form-control" />
                    </div>

                    <div class="InputInFoForSell">
                        <label>Price : </label>
                        <Input onChange={this.onchangeTextInput} type="number" name="Price" placeholder="กรอกราคา" class="form-control" />
                    </div>

                    <div className="InputInFoForSell">
                        <label> Details : </label>
                        <TextArea rows={4} onChange={this.onchangeTextInput} type="text" name="Details" placeholder="กรอกรายละเอียด" class="form-control" />
                    </div>

                    <div className="InputInFoForSell">
                        <label>Contact : </label>
                        <Input onChange={this.onchangeTextInput} type="text" name="Contact" placeholder="กรอกช่างทางการติดต่อ" class="form-control" />
                    </div>

                    <div> <ImageUpload returnImageUrl={this.ImageLink} /> </div>

                    <div className="SumbitButton">
                        <Button type="primary" onClick={this.addEventListener} class="btn btn-primary">SUBMIT</Button>
                    </div>

                </div>
                <div>
                    <img src={footertest} id="setimgfoot" />
                </div>
                </div>
        );
    }
}

export default Shirt;