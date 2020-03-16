import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer py-5" >
                    <div className="" style={{marginLeft:"150px"}}>
                        <div className="row align-items-stretch">
                            <div style={{display:'inline-block'}}  className="col-md-4 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <h5>Pro<b>tips</b><span className="text-danger">.</span></h5>
                                    <p>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure</p>                                    
                            </div>
                            <div style={{marginLeft:"30px"}} className="col-md-2 col-lg-2 mb-2 mb-lg-2" data-aos="fade-up" data-aos-delay="100">

                                <h5>Quick Links</h5>
                                <p>About Us</p>
                                <p>Blog</p>
                                <p>Contact</p>
                                <p>FAQ</p>
                                    
                            </div>
                            <div style={{marginLeft:"30px"}} className="col-md-2 col-lg-2 mb-2 mb-lg-2" data-aos="fade-up"  data-aos-delay="200">
                                <h5>Pages</h5>
                                <p>Disclaimer</p>
                                <p>Financing</p>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                    
                            </div>
                            <div style={{marginLeft:"30px"}} className="col-md-2 col-lg-2 mb-2 mb-lg-2" data-aos="fade-up">
                                
                                <h5>Legal Stuff</h5>
                                <p>Disclaimer</p>
                                <p>Financing</p>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>

                            </div>

                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer py-1 text-center"><small><p>Designed by @Adeleye</p></small></div>
            </React.Fragment>
        )
    }
}
