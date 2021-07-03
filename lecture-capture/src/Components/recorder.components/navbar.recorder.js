import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBBtn, MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink
} from "mdbreact";
import {TOKEN_EMAIL, TOKEN_TYPE} from "../login.components/config";
import { isLogin, logout } from "../login.components/reactAuth";

import '../recorder.components/css.recorder/recorder.css';

class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isLogin: isLogin()
        };

        this.onClick = this.onClick.bind(this);
    }

    handleLogout = () => {
        logout();
        console.log("logout");
        this.setState({
            isLogin: false,
        });
    };

    handleNameClick = () => {
        if (localStorage.getItem(TOKEN_TYPE) === "lecturer") {
            window.location = "/lecture-capture";
        }
    };

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
                                        <MDBBtn href="/dashboard">Dashboard</MDBBtn>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBBtn href="/lecture-capture">Web Lecture Capture</MDBBtn>
                                        {/*<MDBNavLink to="/lecture-capture">Web Lecture Capture</MDBNavLink>*/}
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
                                        <MDBBtn onClick={() => this.handleLogout()} href="/">Logout</MDBBtn>
                                        {/*<MDBNavLink to="" onClick={() => this.handleLogout()}><MDBIcon fab icon="logout" />*/}
                                        {/*<a href="/lecture-capture"></a> Logout</MDBNavLink>*/}
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
