import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class ProductItem extends Component {
    render() {
        const {text, title, image, price, id} = this.props
        return (
            <Card style={{minWidth: '18rem', marginTop: '20px'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <p>{price}</p>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;