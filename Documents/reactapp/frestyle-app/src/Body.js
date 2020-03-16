import React, { Component } from 'react'

export default class Body extends Component {

   
    render() {
        let styleiframe ={
            width:"50%",
            height:"50vh",
            marginRight:"100px",
            
            // background: radial-gradient(circle farthest-corner at 100% 50%,rgba(68,68,68,0) 60%,#444 70%)
            }
            const getUpdate = {
                backgroundColor:"rgba(253, 65, 83, 0.96)", 
                color:"#fff", 
                textAlign:'center',
                borderRadius:'10px',
                paddingTop:'70px',
                height:'27vh',
                paddingLeft:'150px'
            }

        return (
            <React.Fragment>
                <div className="site-blocks-cover bg-light" style={{overflow: "hidden"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12" style={{position: "relative"}} data-aos="fade-up" data-aos-delay="200">
                                <div style={{}} >
                                    <iframe style={styleiframe} src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                            frameBorder='0'
                                            allow='autoplay; encrypted-media'
                                            allowFullScreen
                                            title='video'
                                            className= "img-fluid img-absolute">
                                    </iframe>
                                 </div>
                                <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="col-lg-6 mr-auto">
                                        <h3>A Guide To <b>Rocky</b> Mountain</h3>
                                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                        <div><a href="#" style={{borderRadius:'5px'}} className="btn btn-danger">Get Started</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light" id="features-section">
                    <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-md-3 col-lg-3 mb-3 mb-lg-3" data-aos="fade-up">
                                    
                                    <div className="unit-4 d-block">
                                        <div className="unit-4-icon mb-3">
                                          <span className="text-primary"><img src="images/Group4.png"/></span>
                                        </div>
                                        <div>
                                            <h3>Marketing Consulting</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-3 col-lg-3 mb-3 mb-lg-3" data-aos="fade-up" data-aos-delay="100">

                                    <div className="unit-4 d-block">
                                        <div className="unit-4-icon mb-3">
                                            <span className="text-primary" ><img style={{height:"150px"}} src="images/Rectangle4.png"/></span>
                                        </div>
                                        <div>
                                            <h3>Market Analysis</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mb-3 mb-lg-3" data-aos="fade-up"  data-aos-delay="200">
                                    <div className="unit-4 d-block">
                                        <div className="unit-4-icon mb-3">
                                            <span className="text-primary "><img src="images/Group5.png"/></span>
                                        </div>
                                        <div>
                                            <h3>Easy Purchase</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mb-3 mb-lg-3" data-aos="fade-up">
                                    
                                    <div className="unit-4 d-block">
                                        <div className="unit-4-icon mb-3">
                                            <span className="text-primary"><img src="images/Group7.png"/></span>
                                        </div>
                                        <div>
                                            <h3>Marketing Consulting</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="feature-big bg-light">
                    <div className="container">
                        <div className="row mb-5 site-section">
                            <div className="col-lg-7" data-aos="fade-right">
                                <img src="images/illustrator.png" alt="Image" className="img-fluid"/>
                            </div>
                            <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                                <h3 className="text-black"><b><strong>Learn With Protips</strong></b></h3>
                                
                                <div className="d-flex mb-4" data-aos="fade-left">
                                    <div className="mr-3">
                                        <ul class="ul-check mb-5 list-unstyled success">
                                            <li>Beyond the Naked Eye</li>
                                            <li>Make Grilling A Healthy Experience</li>
                                            <li>Make Sure Your Ice is Safe And Clean</li>
                                            <li>Peace On Earth A Wonderful Wish But No Way</li>
                                            <li>Get Best Advertiser in Your Side Packet</li>
                                            <li>What's Under Your Grill</li>
                                        </ul>
                                    </div>
                                </div>
                                <span><button style={{borderRadius:'5px'}} className="btn btn-danger text-center">Know More</button></span>
                            </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="site-section testimonial-wrap" id="testimonials-section">
                    <div className="container">
                        <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h3 className="section-title mb-3">Testimonials</h3>
                        </div>
                        </div>
                    </div>
                    <div className="slide-one-item home-slider owl-carousel">
                        <div>
                            <div className="testimonial">
                            <figure className="mb-4 d-block align-items-center justify-content-center">
                                <div><img src="images/person_3.jpg" alt="Image" className="w-100 img-fluid mb-3 shadow"/></div>
                            </figure>
                            <blockquote className="mb-3">
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                            <p className="text-black"><strong>John Smith</strong></p>

                            
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                            
                            <figure className="mb-4 d-block align-items-center justify-content-center">
                                <div><img src="images/person_2.jpg" alt="Image" className="w-100 img-fluid mb-3 shadow"/></div>
                            </figure>

                            <blockquote className="mb-3">
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                            
                            <p className="text-black"><strong>Robert Aguilar</strong></p>
                            
                            
                            </div>
                        </div>

                        <div>
                            <div className="testimonial">
                            <figure className="mb-4 d-block align-items-center justify-content-center">
                                <div><img src="images/person_4.jpg" alt="Image" className="w-100 img-fluid mb-3 shadow"/></div>
                            </figure>
                            <blockquote className="mb-3">
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                            <p className="text-black"><strong>Roger Spears</strong></p>
                            </div>
                        
                        </div>

                        <div>
                            <div className="testimonial">
                            <figure className="mb-4 d-block align-items-center justify-content-center">
                                <div><img src="images/person_1.jpg" alt="Image" className="w-100 img-fluid mb-3 shadow"/></div>
                            </figure>
                            <blockquote className="mb-3">
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                            <p className="text-black"><strong>Kyle McDonald</strong></p>
                            </div>

                        </div>

                        </div>
                    </div>
                    <div className="site-section" id="about-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <h3 className="section-title mb-3">Our Story</h3>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-5 ml-auto pl-lg-5" data-aos="fade-right">
                                <h3 className="text-black mb-4 h3 font-weight-bold">Who are we?</h3>
                                <p className="mb-4">
                                    There is something about parenthood that gives us a sense of history
                                    and a deeply rooted desire to send on into next generation the great things we have discovered about life.
                                    {/* <br/> */}
                                    And part of that is the desire to instill in our children the love of science of learning and particularly the love of nature
                                </p>
                                
                            </div>
                            <div className="col-lg-5 ml-auto pl-lg-5" data-aos="fade-left">
                                <h3 className="text-black mb-4 h3 font-weight-bold">What's up with the name?</h3>
                                <p className="mb-4">
                                    There are advances being made in science and technology everyday and a good example of this is
                                    the LCD monitor. LCD monitors have several benefits over the old chunky <b>computer</b> monitors that most
                                    users are familiar with. Old computer monitors take up quite a bit of desktop space put out a ton of heat, drain a ton of energy,
                                    and most often have low picture quality and resolution.
                                </p>
                                
                            </div>
                        </div>

                        
                    </div>
                    </div>

                    <div className="site-section" id="blog-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <h3 className="section-title mb-3">Our Recent Post</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="h-entry">
                                <img src="images/image.png" alt="Image" className="img-fluid"/>
                                <h3>Upgrading To Microsoft Windows vista Tips</h3>
                                <div className="meta mb-4">Ham Brook <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span>News</div>
                              
                                </div> 
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="h-entry">
                                    <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                                    <h3>Finally A Top Secret Way You Can Get</h3>
                                    <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span>News</div>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="h-entry">
                                    <img src="images/image-bg.png" alt="Image" className="img-fluid"/>
                                    <h3>The Universe Through A Child's Eyes</h3>
                                    <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> News</div>
                                </div> 
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div style={getUpdate} className="container " data-aos="fade-up" data-aos-delay="200">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="h-entry">
                            <h5> Get Update Protips every newsletter</h5>
                            </div> 
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div class="row form-group">
                                <div class="col-md-12">
                                <input type="email" id="email" class="form-control" style={{borderRadius:'5px'}} placeholder="Enter your email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </React.Fragment> 
        )
    }
}
