import React, { useState } from "react";
import Modal from "react-modal";
import AboutMain from "../about";
import Image from "next/image";
// import bg from "/assets/img/hero/dark.jpg";
const heroContent = {
  heroImage: "/assets/img/hero/dark.jpg",
  heroMobileImage: "/assets/img/hero/img-mobile.jpg",
  heroTitleName: "Huzaifa Umer",
  heroDesignation: "MERN Stack Developer",
  heroDescriptions: `I'm a passionate MERN Stack Developer from Punjab, Pakistan. 
  With a strong foundation in React JS, Next JS, Tailwind CSS, MongoDB, Node js through professional experience, 
  I focus on building clean, scalable, and user-friendly web applications.  
  My goal is to create impactful software solutions.`,
  heroBtn: "more about me",
};


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center ">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #1a1a1a 75%, #000000 100%)'
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
          <div 
          className="main-img-mobile d-sm-block d-lg-none rounded-ciricle"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #1a1a1a 75%, #000000 100%)', borderRadius:'50%'
          }}
          >
              {/* <Image
                src={heroContent.heroMobileImage}
                className="img-fluid "
                alt="hero man"
                width={500}
                height={500}
                style={{width:'100%',height:'100%', borderRadius:'50%'}}
              /> */}
            </div>
            <h1 className="text-uppercase poppins-font">
              {"I'm"} {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src="/assets/img/cancel.svg" alt="close icon" width={20} height={20} />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
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
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
