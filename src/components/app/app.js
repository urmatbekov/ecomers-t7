import React, {Component} from 'react';
import NavbarMenu from "../navbar/navbar";
import Products from "../products/products";
import Cart from "../cart/cart";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import AddProduct from "../add-product/add-product";


class App extends Component {
    state = {
        data: [],
        cart: []
    }

    componentDidMount() {
        axios('https://nurkadyr.pythonanywhere.com/product/').then((res) => {
            this.setState({data: res.data.results})
        })
    }


    addToCart = (id) => () => {
        this.setState(({cart, data}) => {
            if (cart.findIndex(item => item.id === id) === -1) {
                const product = {...data.find((product) => product.id === id), count: 1}
                return {cart: [...cart, product]}
            }
        })
    }

    deleteFromCart = (id) => () => {
        this.setState(({cart}) => {
            const productIndex = cart.findIndex((product) => product.id === id)
            return {cart: [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)]}
        })
    }

    changeToCart = (id) => (step) => () => {
        this.setState(({cart}) => {
            const productIndex = cart.findIndex((product) => product.id === id)
            const product = {...cart[productIndex]}
            product.count += step
            if (product.count <= 0) {
                return this.deleteFromCart(id)()
            }
            return {cart: [...cart.slice(0, productIndex), product, ...cart.slice(productIndex + 1)]}
        })
    }

    testfunc = async () => {

    }


    render() {
        const cartCount = this.state.cart.length
        return (
            <BrowserRouter>
                <div>
                    <NavbarMenu cartCount={cartCount}/>
                    <Switch>
                        <Route exact path="/products">
                            <Products addToCart={this.addToCart} data={this.state.data}/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart deleteFromCart={this.deleteFromCart} changeToCart={this.changeToCart}
                                  data={this.state.cart}/>
                        </Route>
                        <Route exact path="/add-product">
                            <AddProduct/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;