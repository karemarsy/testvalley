import React from 'react'
import VerticalBarIcon from "../../assets/vertical-bar.svg";

export default function FooterText({ link, text }) {
  return (
    <div className="flex gap-2 items-center">
      <span className=" leading-[18px] text-left">{text}</span>
      <a href="" >
      <span className="leading-[18px] cursor-pointer text-left underline text-[#666666]">{link}</span>
      </a>
        <span className="mr-[8px] text-[#dddddd] text-sm ">
          <VerticalBarIcon />
        </span>
        
      
      
    </div>
  )
}
