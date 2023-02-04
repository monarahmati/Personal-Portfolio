
import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">آدرس</span>  ایران . تهران
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block"> ایمیل من </span>{" "}
        <a href="mailto:steve@mail.com">steve@mail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block"> تلفن تماس </span>{" "}
        <a href="Tel: +216 21 184 010">+216 21 184 010</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
