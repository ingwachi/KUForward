import React, { Component } from 'react';
import firebase from '../firebase.js';
import { log } from 'util';
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import '../SetHeaderCT.css';
import '../Component/AddInfoPage.css';
import { Modal, Button } from 'antd';
import headerBook from '../image/headerBook.png';
import smallTapDown from '../image/footertest.png';
import '../Component/AddInfoPage.css';
import SellAndBuy from '../SellAndBuy.js';
import '../FixImgInMadal.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const { Meta } = Card;
const db = firebase.firestore();
class BookStore extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            loading: false,
            visible: false,
            outputUser: "",
            arr: [],
            stateObj: {},
        }
    }
    componentDidMount() {
        // const temp = [];
        let wholedata = [];
        db.collection('stockBook').get()
            .then((res) => {
                res.forEach(doc => {
                    var temp = [];
                    temp.push(doc.id)
                    temp.push(doc.data())
                    wholedata.push(temp)

                });
                this.setState({ allData: wholedata })
            })

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.uid);
            console.log(user.displayName);
            var outputUser = user.displayName
            this.setState({ outputUser })

        });
    }
    showModal = (id) => {
        let obj = {
            Title: '',
            Contact: '',
            Details: '',
            Price: '',
            ImageLink: '',
        };

        db.collection('stockBook').doc(`${id}`).get()
            .then((doc) => {
                console.log(doc.data());
                obj.Title = doc.data().Title
                obj.Details = doc.data().Details
                obj.Price = doc.data().Price
                obj.Contact = doc.data().Contact
                obj.ImageLink = doc.data().ImageLink
                this.setState({
                    visible: true,
                    stateObj: obj,
                });
            })

    };

    DisplayName = (outputUser) => {
        this.setState({ outputUser })
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };


    render() {
        console.log('render')
        const { visible, loading } = this.state;
        const { current } = this.state;
        const listOfItem = this.state.allData.map((item) => {
            console.log(item.Title)
            var id = item[0]
            var Title = item[1].Title
            var Contact = item[1].Contact
            var Details = item[1].Details
            var Price = item[1].Price
            var ImageLink = item[1].ImageLink
            var component = (
                <Card hoverable onClick={() => this.showModal(id)}
                    style={{ width: 300, margin: 24 }}
                    cover={
                        <img
                            alt="example"
                            src={ImageLink}
                        />
                    }
                    actions={[<h4>ราคา {Price} บาท</h4>]}
                >
                    <Meta
                        title={Title}
                        description={<div>
                            {Details}<br />{Contact}
                        </div>}
                    />

                </Card>

            )
            return (
                <div>
                    <Modal
                        visible={visible}
                        title={this.state.stateObj.Title}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="submit" onClick={this.handleOk}>
                                OK
                            </Button>,
                        ]}
                    >
                        <div class="wrapper" ><img src={this.state.stateObj.ImageLink} id="setimg"></img></div>
                        <br />
                        <div class="settext">
                            <p >{this.state.stateObj.Details}</p>
                            <p >ติดต่อ : {this.state.stateObj.Contact}</p>
                            <p><h3>ราคา {this.state.stateObj.Price} บาท</h3></p>
                        </div>


                    </Modal>
                    {component}
                </div>
            )
        })


        return (
            <div className="store">
                <h1 id="loginName" style={{ marginBottom: '0px' }}> {this.state.outputUser}</h1>
                <img id="header" src={headerBook} />
                <div className="setButtonGroup">
                    <Button type="primary" id="distButton">BOOKS</Button>

                    <Link to ="/ClothesStore"><Button id="distButton">Clothes</Button></Link>
                    <Link to ="/AccessoriesStore"><Button id="distButton">Accessories</Button></Link>
                    <Link to ="/OthersStore"><Button id="distButton">Others</Button></Link>
                    <Link to ="/SellPage"><Button type="danger" id="distButton">SELL</Button></Link>

                </div>
                <br /><br />

                <br /><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{listOfItem}</div>
                <img id="tapDown" src={smallTapDown} />
            </div>


        );
    }
}

export default BookStore;