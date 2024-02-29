import React from "react";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-category.svg";
import SearchIcon from "../../assets/search.svg";
import ButtonIcon from "../../assets/button.svg";
import VerticalBarIcon from "../../assets/vertical-bar.svg";

function navbar() {
  return (
    <nav className=" hidden md:block w-full h-[72px] bg-white sticky border-b border-solid border-b-[#EEEEEE]">
      <div className="w-[960px] m-auto flex justify-between items-center align-middle h-full">
        <div className="flex items-center justify-center ">
          <a href="/"><Logo className="mr-4 w-[128.345px] h-[25.093px]" /></a>
          <div className="text-[#99CC99] cursor-pointer flex items-center">
            <span className="mr-4 ">
              <MenuIcon />
            </span>
            <span> 카테고리</span>
          </div>
          <div className="relative ml-[90px] w-[335px] items-center">
            <SearchIcon className="absolute cursor-pointer top-[10px] left-3 w-5" />
            <input
              type="search"
              placeholder="살까말까 고민된다면 검색해보세요!"
              className="bg-white pl-[40px] pr-[40px]"
            />
          </div>
        </div>
        <div className="flex justify-end ml-0 items-center text-[#333333]">
          <button className="flex justify-center mr-2 text-center text-sm font-semibold leading-[14px] tracking-tighter">
            <ButtonIcon />
          </button>
          <VerticalBarIcon className="mr-[12px]"/>
          <button cursorshover="true">로그인 / 회원가입</button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
