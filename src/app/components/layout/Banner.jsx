import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState([]);
  const API_URL = "https://api.testvalley.kr/main-banner/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePreviousSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <div className="md:w-[960px] mx-auto relative z-20 overflow-hidden css-uxm20z">
      <div className="ars overflow-visible relative z-10 mx-auto">
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
            <div class=" hello swiper-wra">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="swiper-pagination swiper-pagination-bullets"
                >
                  <div className="relative ">
                    <SwiperSlide className="relative test">
                      <Image
                        width={1000}
                        height={100}
                        src={slide.pcImageUrl}
                        alt={`Slide ${index + 1}`}
                        className="relative"
                      />
                      <button
                        className="md:block absolute swiper-button-next text-white top-[50%] right-4 w-[44px] height-[44px] p-3 items-center justify-center rounded-full bg-[#999999]"
                        onClick={handleNextSlide}
                      />
                      <button
                        className=" absolute swiper-button-prev text-white top-[50%] left-4 w-[44px] height-[44px] p-3 items-center justify-center rounded-full bg-[#999999]"
                        onClick={handlePreviousSlide}
                      />
                    </SwiperSlide>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
