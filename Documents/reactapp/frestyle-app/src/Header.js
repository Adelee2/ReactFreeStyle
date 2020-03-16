import React, { Component,Fragment } from 'react'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar py-4 js-sticky-header site-navbar-target bg-light" role="banner">

                <div className="container">
                    <div className="row align-items-center">
                    
                    <div className="col-6 col-md-3 col-xl-4  d-block">
                        <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Pro<b>tips</b><span className="text-danger">.</span> </a></h1>
                    </div>

                    <div style={{}} className="col-12 col-md-9 col-xl-8 main-menu">
                        <nav className="site-navigation position-relative text-right" role="navigation">

                        <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                            <li><a href="#home-section" className="nav-link">Home</a></li>
                            <li><a href="#" className="nav-link">About</a></li>
                            <li><a href="#" className="nav-link">Pricing</a></li>
                            <li><a href="#" className="nav-link">Contact</a></li>
                            <li><button style={{borderRadius:'5px'}} type= "button" className="btn btn-danger">Sign In</button></li>&nbsp;&nbsp;
                            <li><button style={{borderRadius:'5px',backgroundColor:'black', color:'#fff'}} type= "button" className="btn">Signup</button></li>
                        </ul>
                        </nav>
                    </div>


                    <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

                    </div>
                </div>
                
                </header>
            </React.Fragment>
        )
    }
}
