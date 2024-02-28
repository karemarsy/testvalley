import React from "react";
import VerticalBarIcon from "../../assets/vertical-bar.svg";

export default function FooterLink({ link, text }) {
  return (
    <div className="flex gap-2 items-center">
      <span className="leading-[18px] cursor-pointer text-left">{text}</span>
      <a href="" className="flex gap-2 items-center">
        <span className=" leading-[18px] cursor-pointer text-left">{link}</span>
      </a>
      <span className="mr-[8px] text-[#dddddd] text-sm">
          <VerticalBarIcon />
        </span>
    </div>
  );
}
