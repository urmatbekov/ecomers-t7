import React, {Component} from 'react';
import {CardDeck, Container} from "react-bootstrap";
import ProductItem from "./product-item";

class Products extends Component {

    render() {
        const {addToCart} = this.props;
        return (
            <Container >
                <CardDeck>
                    {this.props.data.map((item)=><ProductItem addToCart={addToCart(item.id)} key={item.id} {...item}/>)}
                </CardDeck>
            </Container>
        );
    }
}

export default Products;