import React, {Component} from 'react';
import {Container, Jumbotron} from "react-bootstrap";
import * as axios from "axios";

const initialState = {
    title: "",
    price: "",
    image: "",
    imageFile: null
}

class AddProduct extends Component {

    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget;
        this.setState({
            [elem.name]: elem.value
        }, () => {
            console.log(this.state)
        })
    }
    onFileChange = (e) => {
        const elem = e.currentTarget;
        this.setState({
            [elem.name + "File"]: elem.files[0],
            [elem.name]: elem.value
        }, () => {
            console.log(this.state)
        })

    }

    onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        const state = this.state
        formData.append("image", state.imageFile);
        formData.append("price", state.price);
        formData.append("title", state.title);
        axios.post('https://nurkadyr.pythonanywhere.com/product/', formData).then((data) => {
                this.props.addProduct(data.data)
            this.setState(initialState)
            }
        )
    }


    render() {
        return (
            <Container>
                <Jumbotron>
                    <div className="col-lg-4 m-auto">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="Title">Title</label>
                                <input value={this.state.title} name="title" onChange={this.onChange} id="Title"
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Price">Price</label>
                                <input value={this.state.price} name="price" onChange={this.onChange} id="Price"
                                       type="number"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Image">Image</label>
                                <input value={this.state.image} name="image" onChange={this.onFileChange} id="Image"
                                       type="file"
                                       className="form-control-file"/>
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>

                        </form>
                    </div>
                </Jumbotron>
            </Container>
        );
    }
}

export default AddProduct;