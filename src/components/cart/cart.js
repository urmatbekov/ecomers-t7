import React, {Component} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import './cart.css'

class Cart extends Component {
    render() {
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="cart-row">
                            <td>
                                <img src="/product.webp" alt=""/>
                            </td>
                            <td>
                                Card Title
                            </td>
                            <td>
                                120
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                240
                            </td>
                        </tr>
                        <tr className="cart-row">
                            <td>
                                <img src="/product.webp" alt=""/>
                            </td>
                            <td>
                                Card Title
                            </td>
                            <td>
                                120
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                240
                            </td>
                        </tr>
                        <tr className="cart-row">
                            <td>
                                <img src="/product.webp" alt=""/>
                            </td>
                            <td>
                                Card Title
                            </td>
                            <td>
                                120
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                240
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default Cart;