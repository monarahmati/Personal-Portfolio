import React from "react";

const achievementsContent = [
  { title: "12", subTitle1: "سال ها", subTitle2: "تجربه" },
  { title: "97", subTitle1: "تکمیل شد", subTitle2: "پروژه" },
  { title: "81", subTitle1: "شادی", subTitle2: "مشتریان" },
  { title: "53", subTitle1: "جوایز", subTitle2: "برنده شده" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
