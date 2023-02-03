import React from "react";
import { Link } from "react-router-dom";
import dark from "../assets/img/intro/dark.jpg";
import rtl from "../assets/img/intro/rtl.jpg";

const previewDemo = [
  {
    img: dark,
    title: "Dark & Light (Professional)",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
  {
    img: rtl,
    title: "Dark & Light (RTL Version)",
    routerPath: "/home-rtl",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>تونس</h1>
          <h2>قالب شخصی پرتفولیو React</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={val.img}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2 className="demo-title">{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        نمایش نسخه ی نمایشی
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
        <div className="go_purchase">
          <h6 data-aos="fade-up" data-aos-duration="1200">
          اکنون در مرحله درستی هستید
          </h6>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          تونس را بخرید و فوق العاده سریع خود را بسازید{" "}
            <span className="theme-color">React JS</span> &amp;{" "}
            <span className="theme-color">Bootstrap 5 </span> نمونه کارها بر اساس
            قالب.
          </h3>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <a
              className="button"
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> هم اکنون بخرید</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
          </div>
        </div>
        {/* End go_purchase */}

        <div className="text-center footer_copyright">
          <h6>Tunis -قالب شخصی پرتفولیو React</h6>
          <h5>
            &copy; {new Date().getFullYear()} Designed with{" "}
            <span className="heart">&#10084;</span> by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes.
            </a>{" "}
          </h5>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
};

export default Preview;
