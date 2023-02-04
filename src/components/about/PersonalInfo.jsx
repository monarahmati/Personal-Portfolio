import React from "react";

const personalInfoContent = [
  { meta: "نام", metaInfo: "مرتضی" },
  { meta: "نام خانوادگی", metaInfo: "نوری" },
  { meta: "سن", metaInfo: "27 ساله" },
  { meta: "ملیت", metaInfo: "ایرانی" },
  { meta: "فریلنسر", metaInfo: "در دسترس" },
  { meta: "آدرس", metaInfo: "ایران" },
  { meta: "تلفن تماس", metaInfo: "+9891855549" },
  { meta: "ایمیل", metaInfo: "you@mail.com" },
  { meta: "اکانت Skype ", metaInfo: " steve.milner" },
  { meta: "زبان", metaInfo: "انگلیسی و  آلمانی" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
