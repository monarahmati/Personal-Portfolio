import React from "react";

const experienceContent = [
  {
    year: "  1394 - تا اکنون",
    position: "توسعه دهنده وب",
    compnayName: "سیمرغ",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `,
  },
  {
    year: "1390 - 1394",
    position: "طراح UI/UX",
    compnayName: "جنگل تم",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `,
  },
  {
    year: "1384 - 1390",
    position: "مشاور",
    compnayName: "دلتا",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div style={{ display:'flex'}}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase" style={{ marginRight:'2.5rem' , marginTop:'0.5rem'  }}>{val.year}</span>
          </div>
          <h5 className="poppins-font text-uppercase">
            <span className="place open-sans-font"> {val.compnayName} </span>
            {val.position} 
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
