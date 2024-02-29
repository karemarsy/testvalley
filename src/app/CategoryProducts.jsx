import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Product from "./components/layout/Product";
import { useState } from "react";
import RightChevron from "./assets/right_chevron.svg";
import LeftChevron from "./assets/left_chevron.svg";

export default function CategoryProducts({ category }) {
  const title =
    category.title.length <= 22
      ? category.title
      : category.title.slice(0, 23) + "...";

  const [swiper, setSwiper] = useState(null);

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
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 mt-14">
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-between">
        <div className="pr-[40px] bg-white pb-5">
          <h1 className="uppercase text-2xl font-semibold text-[18px] text-[#333333] leading-6 md:text-2xl">{title}</h1>
          <p className="uppercase text-secondary text-xs mt-3 text-[#9999]">
            {category.subtitle}
          </p>
        </div>
        <div className="hidden lg:flex gap-6">
          <button onClick={handleNextSlide} disabled={swiper?.isBeginning}>
            <LeftChevron />
          </button>
          <button onClick={handlePreviousSlide} disabled={swiper?.isEnd}>
            <RightChevron />
          </button>
        </div>
      </div>
      <div className="hidden lg:block col-span-2 lg:col-span-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
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
          {category.items.map((product) => (
            <SwiperSlide key={product.key}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden col-span-2 grid grid-cols-2 gap-x-2 gap-y-8">
        {category.items.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
    </div>
  );
}
