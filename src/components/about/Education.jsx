import React from "react";

const educationContent = [
  {
    year: "1392",
    degree: "مدرک مهندسی",
    institute: "دانشگاه آکسفورد",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`,
  },
  {
    year: "1390",
<<<<<<< HEAD
    degree: "کارشناسی ارشد ",
=======
    degree: "کارشناسی ارشد",
>>>>>>> 2a062616b390becf1a16fcf6d2f4990bdee00bb4
    institute: "دانشگاه کیف",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `,
  },
  {
    year: "1386",
<<<<<<< HEAD
    degree: "مدرک لیسانس ",
=======
    degree: "مدرک لیسانس",
>>>>>>> 2a062616b390becf1a16fcf6d2f4990bdee00bb4
    institute: "دانشگاه تهران",
    details: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
<<<<<<< HEAD
          <span className="time open-sans-font text-uppercase"  style={{ marginRight:'2.5rem' , marginTop:'0.5rem'  }} >{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            <span className="place open-sans-font"> {val.institute} </span>
            {val.degree}
=======
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
>>>>>>> 2a062616b390becf1a16fcf6d2f4990bdee00bb4
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
