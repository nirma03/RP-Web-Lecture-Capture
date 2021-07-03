import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink
} from "mdbreact";
import '../recorder.components/css.recorder/recorder.css';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return(
            <div>
                <Router>
                    <header>
                        <MDBNavbar color="default-color" dark expand="md" scrolling fixed="top">
                            <MDBNavbarBrand href="/">
                                <strong>Lecture Delivery System</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBNavLink to="/">Dashboard</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/lecture-capture">Web Lecture Capture</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}

export default Navbar;
