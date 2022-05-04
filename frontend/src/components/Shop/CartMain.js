import React from 'react';

import shopImg1 from '../../assets/img/shop/1.jpg';
import shopImg2 from '../../assets/img/shop/2.jpg';

const CartMain = () => {
    return (
        <div className="rs-cart orange-style pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="cart-wrap">
                    <form action="#">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th className="product-remove"></th>
                                    <th className="product-thumbnail"></th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                    <td className="product-thumbnail"><a href="#"><img src={shopImg2} alt="" /></a></td>
                                    <td className="product-name"><a href="#">Medicine Bottle</a></td>
                                    <td className="product-price"><span>$</span>30.00</td>
                                    <td className="product-quantity ">
                                        <input type="number" className="input-text" />
                                    </td>
                                    <td className="subtotal"><span className="amount"><span className="symbol">$</span>30.00</span></td>
                                </tr>
                                <tr>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                    <td className="product-thumbnail"><a href="#"><img src={shopImg1} alt="" /></a></td>
                                    <td className="product-name"><a href="#">Medicine Bottle</a></td>
                                    <td className="product-price"><span>$</span>30.00</td>
                                    <td className="product-quantity">
                                        <input type="number" className="input-text" />
                                    </td>
                                    <td className="subtotal"><span className="amount"><span className="symbol">$</span>30.00</span></td>
                                </tr>
                                <tr>
                                    <td colSpan="6" className="action text-left">
                                        <div className="row no-gutter">
                                            <div className="col-md-8">
                                                <form action="#">
                                                    <div className="coupon">
                                                        <input type="text" name="text" placeholder="Coupon code" required />
                                                        <button className="btn-shop apply-btn orange-color" type="submit">Apply Coupon</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="update-cart text-right">
                                                    <button className="btn-shop orange-color" type="submit">Update cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart-collaterals pt-70 md-pt-50">
                            <div className="cart-totals">
                                <h5 className="title mb-25">Cart totals</h5>
                                <table className="cart-total-table">
                                    <tbody>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td><span className="amount"><span>$</span>60.00</span></td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td><strong><span className="amount"><span>$</span>60.00</span></strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="wc-proceed-to-checkout">
                                    <button className="btn-shop orange-color" type="submit"> Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default CartMain;