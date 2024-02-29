import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { useState } from "react";
import Product from "./components/layout/Product";
import RightChevron from "./assets/right_chevron.svg";
import LeftChevron from "./assets/left_chevron.svg";


// Install Swiper modules
SwiperCore.use([Autoplay]);

export default function CategoryProducts({ category }) {
  const { title, subtitle, items } = category;

  const shortenedTitle =
    title.length <= 22 ? title : `${title.slice(0, 23)}...`;

  const [swiper, setSwiper] = useState(null);

  const handleNextSlide = () => {
    if (swiper) swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 mt-14">
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-between">
        <div className="pr-[40px] bg-white pb-5">
          <h1 className="uppercase text-2xl font-semibold text-[18px] text-ellipsis overflow-hidden text-[#333333] leading-6 md:text-2xl">
            {shortenedTitle}
          </h1>
          <p className="uppercase text-secondary text-xs mt-3 text-[#9999]">
            {subtitle}
          </p>
        </div>
        <div className="hidden lg:flex gap-6">
          <button
            onClick={handlePreviousSlide}
            disabled={!swiper || swiper.isBeginning}
          >
            <LeftChevron />
          </button>
          <button onClick={handleNextSlide} disabled={!swiper || swiper.isEnd}>
            <RightChevron />
          </button>
        </div>
      </div>
      <div className="hidden lg:block col-span-2 lg:col-span-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          pagination={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={false}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            if (swiper) {
              setSwiper((prevSwiper) => ({
                ...prevSwiper,
                isEnd: swiper.isEnd,
                isBeginning: swiper.isBeginning,
              }));
            }
          }}
        >
          {items.map((product) => (
            <SwiperSlide key={product.key}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden col-span-2 grid grid-cols-2 gap-x-2 gap-y-8">
        {items.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
    </div>
  );
}
