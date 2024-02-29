import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import RightChevron from "../../assets/right_chevron.svg";
import LeftChevron from "../../assets/left_chevron.svg";

export default function Banner() {
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState([]);

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const handlePreviousSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.testvalley.kr/main-banner/all")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response data is an array of slide objects
        setSlides(data);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []); // Empty dependency array to execute the effect only once on component mount

  return (
    <div className="md:w-[960px] mx-auto relative z-20 overflow-hidden css-uxm20z">
      <div className="overflow-visible relative z-10 mx-auto">
        <div className="col-span-2 lg:col-span-4">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={setSwiper}
            onSlideChange={(swiper) =>
              setSwiper((prevSwiper) => ({
                ...prevSwiper,
                isEnd: swiper.isEnd,
                isBeginning: swiper.isBeginning,
              }))
            }
          >
            {slides.map((slide, index) => (
              <swiper-container virtual="true" key={index}>
                <div className="swiper-pagination swiper-button-next relative">
                  <SwiperSlide className="relative test">
                    <Image width={1000} height={100}
                      src={slide.pcImageUrl}
                      alt={`Slide ${index + 1}`}
                      className="relative"
                    />
                    <span className="hidden md:block absolute text-white top-[50%] right-4 w-[44px] height-[44px] p-3 items-center justify-center rounded-full bg-[#999999]">
                      <LeftChevron className="relative top-[50%] cursor-pointer text-white " />
                    </span>
                    <span className="hidden md:block absolute text-white top-[50%] left-4 w-[44px] height-[44px] p-3 items-center justify-center rounded-full bg-[#999999]">
                      <RightChevron className="relative top-[50%] cursor-pointer text-white swiper-button-prev" />
                    </span>
                  </SwiperSlide>
                </div>
              </swiper-container>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
