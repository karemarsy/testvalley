import Image from "next/image";
import StarIcon from "../../assets/start.svg";
import ReturnIcon from "../../assets/return.svg";

export default function Product({ product }) {
  const {
    title,
    media,
    priceInfo,
    rating,
    tagsOnImage,
    tagsOnDesc,
    preface,
    prefaceIconUrl,
  } = product.publication;
  const shortTitle = title.length < 20 ? title : title.slice(0, 20) + "...";
  return (
    <div>
      <div className="relative">
        <Image src={media[0].uri} width={200} height={300} alt={title}  className=" rounded-[8px] mb-2"/>
        {tagsOnImage?.length > 0 && (
          <span className="absolute left-1 bottom-1 flex items-center gap-0.5 bg-[rgb(0,158,138)] rounded-sm text-white text-xs tracking-[-3] p-1">
            <ReturnIcon />
            {tagsOnImage[0]}
          </span>
        )}
      </div>
      <p className="text-[rgb(51,51,51)] leading-5 text-[13px] md:text-[15px]">{shortTitle}</p>
      <p className="font-semibold md:text-lg text-[15px] mt-2 md:mt-0 text-[#424242]">
        {priceInfo.discountRate && (
          <span className="text-red-500">{priceInfo.discountRate}%</span>
        )}
        {priceInfo.discountPrice ? (
          <span>{priceInfo.discountPrice}</span>
        ) : (
          <span>{priceInfo.price}</span>
        )}
        <span className="text-xs font-medium">원</span>
      </p>
      {tagsOnDesc?.length > 0 && (
        <p
          className={`inline-block py-[3px] px-1 text-[10px] rounded tracking-[-3px] font-semibold ${
            tagsOnDesc[0] === "쿠폰"
              ? "bg-[rgb(247,247,247)] text-[rgb(66,66,66)]"
              : "bg-[rgb(255,247,247)] text-[rgb(235,28,28)]"
          }`}
        >
          {tagsOnDesc[0]}
        </p>
      )}
      <p className="flex items-center">
        <StarIcon /> <span className="text-xs font-semibold">{rating}</span>
      </p>
      {prefaceIconUrl && (
        <div className="w-fit flex items-center gap-1 border border-[rgb(238,238,238)] rounded-sm text-xs text-[rgb(51,51,51)] mt-2 py-1 px-1.5">
          <Image src={prefaceIconUrl} width={14} height={14} alt={preface} />
          {preface}
        </div>
      )}
    </div>
  );
}
