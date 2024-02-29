import React from "react";
import LogoMobile from "../../assets/logo-mobile.svg";
import Bell from "../../assets/bell.svg";
import SearchIcon from "../../assets/search.svg";

export default function MobileFoter() {
  return (
    <div className="md:hidden">
      <div className="w-full bg-white text-[#333333]">
        <div className="flex w-100 p-1 items-center relative mx-auto h-[55px]">
          <a href="/">
            <LogoMobile className="w-[225.71px] cursor-pointer block p-0 ml-5" />
          </a>
          <div className="flex items-center gap-3 px-3 text-[#333333] w-full justify-end">
            <Bell className="cursor-pointer" />
            <SearchIcon className="cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}
