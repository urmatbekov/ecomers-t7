import React, {Component} from 'react';
import NavbarMenu from "../navbar/navbar";
import Products from "../products/products";
import Cart from "../cart/cart";
import {Route, BrowserRouter, Switch} from "react-router-dom";


class App extends Component {
    state = {
        data: [
            {
                id: 12,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 130
            },
            {
                id: 24,
                title: "Card Title2",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 150
            },
            {
                id: 45,
                title: "Card Title3",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 170
            },
            {
                id: 56,
                title: "Card Title4",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 110
            },
            {
                id: 1243,
                title: "Card Title5",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 125
            },
            {
                id: 78,
                title: "Card Title6",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: 146
            }
        ],
        cart: []
    }

    addToCart = (id) => () => {
        this.setState(({cart, data}) => {
            const product = {...data.find((product) => product.id === id), count: 1}
            return {cart: [...cart, product]}
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
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;