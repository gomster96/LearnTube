import React from 'react';
import CountryList from './CountryList';
import DistrictList from './DistrictList';

import paypalLogo from '../../assets/img/paypal.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CheckoutMain = () => {
    return (
        <div className="rs-checkout orange-style pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <form id="coupon-form" action="#">
                    <Accordion className="coupon-toggle" allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="card-title">
                                        <span><i className="fa fa-window-maximize"></i> Have a coupon?</span>
                                        <div className="accordion-toggle">Click here to enter your code</div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="card-body">
                                    <p>If you have a coupon code, please apply it below.</p>
                                    <div className="coupon-code-input">
                                        <input type="text" name="coupon_code" placeholder="Coupon code" required />
                                    </div>
                                    <button className="btn-shop orange-color" type="submit">Apply Coupon</button>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </form>
                <div className="full-grid">
                    <form id="checkout-form" action="#">
                        <div className="billing-fields">
                            <div className="checkout-title">
                                <h3>Billing details</h3>
                            </div>
                        </div>
                        <div className="form-content-box">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>First Name *</label>
                                        <input id="fname" name="fname" className="form-control-mod" type="text" required />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Last Name *</label>
                                        <input id="lname" name="lname" className="form-control-mod" type="text" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Company name (optional)</label>
                                        <input id="cname" name="cname" className="form-control-mod" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Country*</label>
                                        <CountryList />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Street address *</label>
                                        <input id="hnumber" name="hnumber" className="form-control-mod margin-bottom" type="text" placeholder="House number and street name" required />
                                        <input id="hnumber-2" name="hnumber" className="form-control-mod" type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Town / City *</label>
                                        <input id="city" name="city" className="form-control-mod" type="text" required />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>District*</label>
                                        <DistrictList />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Postcode / ZIP (optional)</label>
                                        <input id="pcode" name="pcode" className="form-control-mod" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input id="number" name="number" className="form-control-mod" type="text" required />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Email address *</label>
                                        <input id="email" name="email" className="form-control-mod" type="email" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="additional-fields">
                            <div className="form-content-box">
                                <div className="checkout-title">
                                    <h3>Additional information</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Order notes (optional)</label>
                                            <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ordered-product">
                            <div className="checkout-title">
                                <h3>Your order</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Medicine Bottle <strong><i className="fa fa-close"></i> 1</strong></td>
                                        <td>$30.00</td>
                                    </tr>
                                    <tr>
                                        <td>Medicine Bottle <strong><i className="fa fa-close"></i> 1</strong></td>
                                        <td>$30.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Subtotal</th>
                                        <th>$60.00</th>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <th>$60.00</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="payment-method mt-40 md-mt-20">
                            <div className="top-area">
                                <div className="payment-co">
                                    <span>PayPal</span>
                                    <img src={paypalLogo} alt="PayPal Logo" />
                                </div>
                                <div className="p-msg">Pay via PayPal you can pay with your credit card if you dont have a PayPal account.</div>
                            </div>
                            <div className="bottom-area">
                                <p className="mt-14">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                <button className="btn-shop orange-color" type="submit">Continue to payment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutMain;