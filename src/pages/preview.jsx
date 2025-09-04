import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const HomeDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);
  return (
    <Wrapper>
      <SEO pageTitle={"Home Dark"} />
      
      <div className="yellow">
    
         <Header /> 

          <div className="tab-panel_list pt=0 " >
            {/* Hero Content Starts */}
            <div className="home ">
              <div
                className="container-fluid main-container container-home p-0 g-0 overflow-hidden "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </div>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <div className="about" id="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">Resume</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </div>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <div className="portfolio professional" id="portfolio">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
              </div>
              {/* End title */}
              <Portfolio />
            </div>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <div className="contact py-2" id="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
                 style={{paddingBottom:'0'}}
              >
                <div className="row">
                  {/*  Left Side Starts */}
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      {"Don't"} be shy !
                    </h3>
                    <p className="open-sans-font mb-4">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                    <Address />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </div>
            {/* Contact Content Ends */}

            {/* Blog Content Starts */}
            {/* <div className="blog">
              <div
                className="title-section text-start text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>blog</span>
                </h1>
                <span className="title-bg">posts</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                
                <div className="row pb-50">
                  <Blog />
                </div>
             
              </div>
            </div> */}
            {/* Blog Content Ends */}
          </div>
       
      </div>
      <Footer />
    </Wrapper>
  );
};

export default HomeDark;
