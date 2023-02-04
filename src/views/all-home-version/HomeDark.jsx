import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                 درباره <span>من</span>
                </h1>
                <span className="title-bg">رزومه</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                نمونه کار های <span>  من</span>
              </h1>
              <span className="title-bg">کارها</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                 با کلیک  <span> وارد شوید  </span>
              </h1>
              <span className="title-bg">ارتباط</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    خجالتی نباش!
                  </h3>
                  <p className="open-sans-font mb-4">
                  با خیال راحت با من در تماس باشید. من همیشه باز هستم
                    بحث در مورد پروژه های جدید، ایده های خلاقانه یا فرصت ها برای
                    بخشی از چشم اندازهای خود باشید
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
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                مقالات <span>من</span>
              </h1>
              <span className="title-bg">پست ها</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
