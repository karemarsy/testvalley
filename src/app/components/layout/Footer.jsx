import React from "react";
import FooterLink from "./FooterLink";
import FooterText from "./FooterText";
import FooterLogo from "../../assets/footer-logo.svg";
import FooterInsta from "../../assets/footer_insta.svg";
import FooterKakao from "../../assets/footer_kakao.svg";
import FooterBlog from "../../assets/footer_blog.svg";

export default function footer() {
  const links = [
    "이용약관",
    "개인정보 처리방침",
    "이메일 무단 수집 금지",
    "리뉴 워런티 정책",
    "공지사항",
    "입점제안서",
    "카카오톡 상담",
  ];

  const allTexts = [
    [
      {
        text: "상호 : 주식회사 비엘큐",
        link: "",
      },
      {
        text: "대표 : 홍솔",
        link: "",
      },
      {
        text: "개인정보책임자 : 이희석",
        link: "",
      },
      {
        text: "사업자등록번호 : 557-88-01371",
        link: "",
      },
      {
        text: "통신판매업 신고번호 : 2022-서울강남-01638",
        link: "",
      },
      {
        text: "",
        link: "사업자정보확인",
      },
    ],
    [
      {
        text: "본사 주소 : 서울특별시 강남구 선릉로94길 14, 코아렌빌딩 6,7층",
        link: "",
      },
      {
        text: "물류센터 : 서울특별시 성동구 성수이로22길 43, 금오빌딩 5층",
        link: "",
      },
    ],
    [
      {
        text: "대표이메일 : testvalley@testvalleykorea.com",
        link: "",
      },
      {
        text: "대표전화 : 1644-1668",
        link: "",
      },
      {
        text: "",
        link: "전화보다 빠른 상담",
      },
    ],
  ];
  return (
    <footer className="hidden xl:block p-0 max-w-none bg-[#f7f7f7] mt-[120px] min-w-[360px] text-[#666666] ">
      <div className="text-center justify-center flex pt-[32px] w-full border-b border-solid text-sm border-[#eeeeee] p-[20px] ">
        {links.map((link, int) => (
          <FooterLink key={int} link={link} />
        ))}
      </div>

      <div className="max-w-[1000px] pb-[33px] mx-auto text-xs">
        <div className="pb-30 px-0 mx-auto">
          <div className="flex flex-col ">
            {allTexts.map((group, groupIndex) => (
              <React.Fragment key={groupIndex} className=" ">
                <div className="flex flex-row pt-[23px] justify-center  items-center text-[#999999]">
                  {Array.isArray(group) && // Check if group is an array
                    group.map((textItem, index) => (
                      <div key={index} className="">
                        <FooterText text={textItem.text} link={textItem.link} />
                      </div>
                    ))}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-x-[15px] items-center justify-center pt-5">
            <span className="text-[#999999]">
              당사는 고객님의 안전거래를 위해 관련 법률에 의거하여 NHN KCP의
              에스크로서비스를 적용하고 있습니다.
            </span>
            <span className="border border-solid border-[#ababab] text-[#4f4f4f] px-1">
              <a>서비스 가입사실 확인</a>
            </span>
          </div>

          <div className="flex text-[#999999] mt-8 gap-[21px] justify-center items-center h-[24px] mr-[-11px] mb-[6px] align-middle">
            <span>
              <FooterLogo />
            </span>
            <span>COPYRIGHT © 주식회사 비엘큐 inc. All RIGHTS RESERVED.</span>

            <div className="flex gap-[24px]">
              <a>
                <FooterInsta />
              </a>
              <a>
                <FooterKakao />
              </a>
              <a>
                <FooterBlog />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
