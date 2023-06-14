import Image from "next/image"
import BannerImage from "@/images/banner.png"

export default function Banner(){
    return(
        <section className="flex justify-center w-full">
            <div className=" laptop:flex justify-between">
                <div className="w-full laptop:w-[587px] pt-[42px] p-[24px] ">
                    <h1 className="text-dark text-[51px] tablet:text-[90px] font-readex_600 tablet:leading-[116px] ">Plan Less. <br/> Travel More</h1>
                    <p className="labelTxt2 tablet:text-[20px]">Finding and planning a great itinerary can be stressful and time consuming <b> — Intripid makes it easy. </b></p>
                    <div className="flex gap-2 pt-8">
                        <input 
                            type="text"
                            className="input"
                            placeholder="Enter your email"
                        />
                        <button className="btn text-[16px] w-[150px]">Join Now</button>
                    </div>
                    <p className="labelTxt2 text-[14px] text-secondaryDark">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div className="laptop:pl-28">
                    <Image 
                        src={BannerImage}
                        className=" w-full laptop:w-[700px]"
                        alt="Banner"
                    />
                </div>
            </div>
        </section>
    )
}