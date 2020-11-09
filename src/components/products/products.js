import React, {Component} from 'react';
import {CardDeck, Container} from "react-bootstrap";
import ProductItem from "./product-item";

class Products extends Component {

    render() {
        return (
            <Container >
                <CardDeck>
                    {this.props.data.map((item)=><ProductItem key={item.id} {...item}/>)}
                </CardDeck>
            </Container>
        );
    }
}

export default Products;