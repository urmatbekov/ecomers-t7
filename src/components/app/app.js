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
                price:120
            },
            {
                id: 24,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 45,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 45,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 45,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 45,
                title: "Card Title",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            }
        ]
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavbarMenu/>
                    <Switch>
                        <Route exact path="/products">
                            <Products data={this.state.data}/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;