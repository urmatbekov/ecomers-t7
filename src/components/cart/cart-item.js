import React, {Component} from 'react';


class CartItem extends Component {
    render() {
        const {image, title, price,count, deleteFromCart,changeToCart} = this.props
        return (
            <tr className="cart-row">
                <td>
                    <img src={image} alt=""/>
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <button onClick={changeToCart(-1)} className="btn btn-outline-primary"><i className="fa fa-minus"/></button>
                        {count}
                        <button onClick={changeToCart(1)} className="btn btn-outline-primary"><i className="fa fa-plus"/></button>
                    </div>
                </td>
                <td>
                    {price*count}
                </td>
                <td>
                    <button onClick={deleteFromCart} className="btn btn-danger btn-group-vertical">
                        <i className="fa fa-trash"/>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;