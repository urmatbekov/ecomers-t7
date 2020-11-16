import React, {Component} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import './cart.css'
import CartItem from "./cart-item";


class Cart extends Component {
    render() {
        let {deleteFromCart, changeToCart} = this.props

        return (
            <Container>
                <h1>Cart</h1>

                <Row>
                    <Table>
                        <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Count
                            </th>
                            <th>
                                Line Total
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.map((item) => <CartItem changeToCart={changeToCart(item.id)}
                                                                 deleteFromCart={deleteFromCart(item.id)}
                                                                 key={item.id} {...item}/>)}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={6}>
                                <p>
                                    <span>Total: </span>{this.props.data.reduce((sum, item) => item.price * item.count + sum, 0)}
                                </p>
                            </td>
                        </tr>
                        </tfoot>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default Cart;