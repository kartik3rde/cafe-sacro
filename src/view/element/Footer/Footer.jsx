import React from 'react';
import { Button, Divider, makeStyles, Link } from '@material-ui/core';
import theme from './Footer.style';
import { config } from '../../../constants';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme);
function Footer() {
    const {
        footer,
        content,
        logoWrapper,
        copyrightSection,
        copyrightSectionA
    } = useStyles()
    const history = useHistory()
    return (
        <div className={footer} >
            <Divider />
            <div className={content} >
                <div className="row footer-navigations">
                    <div className="col-md-2">
                        <h4>About Us</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Brands</li>
                            <li>Become an Investors</li>
                            <li>Become a Franchise Careers</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Follow</h4>
                        <ul>
                            <li>
                                Instagram
                            </li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>You tube</li>
                            <li>
                                What’s App
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Orders</h4>
                        <ul>
                            <li>Zomato</li>
                            <li>Swiggy</li>
                            <li>Amazon</li>
                            <li>Dine In</li>
                            <li>Pick Up</li>
                        </ul>

                    </div>
                    <div className="col-md-2">
                        <h4>Deals & Offers</h4>
                        <ul>
                            <li>Deals</li>
                            <li>Offers</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Connect</h4>
                        <ul>
                            <li>Feedback</li>
                            <li>Locate Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Help & Support</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Divider />
            <div className={content} >
                
                <div className={copyrightSection}>
                    <p>Copyright © 2020 <a className={copyrightSectionA} href="#"> cafe sacro </a>. All Rights Reserved | Made with ♥ in India</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;
