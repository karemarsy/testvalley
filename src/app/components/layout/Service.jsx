import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Service() {
  const [shortcutData, setShortcutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.testvalley.kr/main-shortcut/all"
        );
        setShortcutData(response.data); // Assuming the response data is an array of objects containing shortcut information
      } catch (error) {
        console.error("Error fetching shortcut data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" md:mt-[40px] mx-auto w-full p-0">
      <div className="md:flex md:justify-between w-[90%] mx-auto items-center text-center overflow-hidden grid grid-cols-5 gap-y-8">
        {shortcutData.map((item, index) => (
          <div
            key={index}
            className="md:w-[64px] w-[50px] md:mr-[18px] cursor-pointer flex-col justify-center items-center"
          >
            <Image src={item.imageUrl} width={62} height={62} alt=""/>
            <div className="md:text-[13px] text-[rgb(51,51,51)] text-[11px] w-full mt-[8px] tracking-[-0.3px] text-center break-words overflow-hidden">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
