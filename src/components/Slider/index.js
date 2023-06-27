"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import DecyPic from "@/images/demoPic/decy.jpg"
import JeccyPic from "@/images/demoPic/jeccy.jpg"
import KatePic from "@/images/demoPic/kate.jpg"
import TeccyPic from "@/images/demoPic/teccy.jpg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
// Import Swiper styles
import "swiper/css"
import { useRef } from "react"

export default function Slider() {
    const swiperRef = useRef()
    return (
        <div className="flex justify-center my-10">
            <div className="w-full laptop:w-4/5 flex items-center">
                <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className="btn bg-info  rounded-full "
                >
                    <FaArrowLeft />
                </button>
                <Swiper
                    // spaceBetween={2}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    loop={true}
                    style={{ zIndex: -1 }}
                >
                    {Data.map((data) => (
                        <SwiperSlide>
                            <div>
                                <Image
                                    src={data.pic}
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={() => swiperRef.current.slideNext()}
                    className="btn bg-info  rounded-full "
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

const Data = [
    {
        id: 1,
        name: "Decy Stenn",
        pic: DecyPic,
        title: "Adventurer",
        comment:
            "I  have been contacting them for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so much, Intripid",
    },
    {
        id: 2,
        name: "Jeccy McKulley",
        pic: JeccyPic,
        title: "Traveler",
        comment:
            "I  have been contacting them for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so much, Intripid",
    },
    {
        id: 3,
        name: "Kate Olyn",
        pic: KatePic,
        title: "Adventurer",
        comment:
            "I  have been contacting them for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so much, Intripid",
    },
    {
        id: 4,
        name: "Teccy Ema",
        pic: TeccyPic,
        title: "Adventurer",
        comment:
            "I  have been contacting them for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so much, Intripid",
    },
]
