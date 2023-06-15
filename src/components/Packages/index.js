import Image from "next/image"
import PlaneImage from "../../images/plane.png"
import TextImage from "../../images/text.png"
import TicketImage from "../../images/ticket.png"

export default function Packages() {
    return (
        <section className=" bg-info h-500 w-full p-10">
            <div className="p-[24px] my-8 ">
                <h1 className="headingTxt text-white text-[38px] leading-[44px] text-center">
                    Enjoy access to the world's best travel advisors & travel
                    deals
                </h1>
            </div>

            <div className="flex justify-center flex-wrap gap-5">
                <div className="card">
                    <Image
                        src={PlaneImage}
                        width={77}
                        height={77}
                        alt="plane Icon"
                    />
                    <h3 className="headingTxt text-[28px] py-4 leading-[32px]">
                        Unlimited & Personalized
                    </h3>
                    <p className="labelTxt2 leading-[27px]">
                        Members get limitless recommendations of destinations
                        based on their customization
                    </p>
                </div>
                <div className="card">
                    <Image
                        src={TextImage}
                        width={77}
                        height={77}
                        alt="plane Icon"
                    />
                    <h3 className="headingTxt text-[28px] py-4 leading-[32px]">
                        Travel Experts & Advisors
                    </h3>
                    <p className="labelTxt2 leading-[27px]">
                        No more doubts because of professional advices from
                        seasoned travelers
                    </p>
                </div>
                <div className="card">
                    <Image
                        src={TicketImage}
                        width={77}
                        height={77}
                        alt="plane Icon"
                    />
                    <h3 className="headingTxt text-[28px] py-4 leading-[32px]">
                        Killer perks & packages
                    </h3>
                    <p className="labelTxt2 leading-[27px]">
                        Free upgrades, vouchers, flash deals, and marvelous
                        experiences!
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn bg-white text-dark rounded-full py-4 px-4 tablet:px-12 hover:bg-secondary">
                    Be an Exclusive Member Now
                </button>
            </div>
            <p className="text-center text-white p-3">
                Have a trip for as low as $28!
            </p>
        </section>
    )
}
