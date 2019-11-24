import React, { Component } from 'react'
import { storage } from '../firebase';
import './AddInfoPage.css'
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';

export class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.getImageLink = this.getImageLink.bind(this);
    }


    handleChange = e => {
        console.log(e)
        if (e.fileList[0]) {
            const image = e.fileList[0].originFileObj;
            this.setState(() => ({ image }));
        }
    }

    getImageLink = (url) => {
        console.log("hello" , url)
    }

    handleUpload = e => {
        e.preventDefault() //
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',

            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },

            () => {
                // complete function ....

                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                    this.props.returnImageUrl(url)

                })
            });

    }

    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            
            <div className="dropbox">
            
            <Upload.Dragger name="files"  onChange={this.handleChange}> 
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single upload.</p>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/150'} alt="Uploaded images" height="150" width="150" />  
                <div><progress value={this.state.progress} max="100" /></div>
            </Upload.Dragger>
            
                <div className="UploadButton">
                    <Button onClick={this.handleUpload}>Upload</Button>
                </div>
              
            
          </div>

        
        )
    }
}

export default ImageUpload

