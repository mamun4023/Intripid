import Image from 'next/image'
import Logo from "../../images/footerLogo.png"
import {FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex justify-center">
            <div className='w-4/5 my-[80px]'> 
                <div className="grid grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-5 laptop:gap-12">
                    <div className=" laptop:col-span-1 desktop:col-span-1 tablet:w-[384px]">
                        <div className='flex justify-center tablet:justify-start '> 
                            <Image 
                                src={Logo} 
                                className="w-[216px] h-[70px]"
                                alt ="Logo" 
                            />
                        </div>
                        <p className='labelTxt2 p-2 my-[24px]  text-center tablet:text-left'>An online platform that encourages travel by removing stress from personal, leisure travel planning. </p>
                        <div className='flex gap-[32px]'>
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <FaLinkedin className='icon' />
                            <FaTwitter className='icon' />
                        </div>
                    </div>
                    <div className="laptop:col-span-2 desktop:col-span-4 mt-[40px] tablet:mt-[80px] laptop:mt-0 desktop:mt-0">
                        <div className='grid grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-6 gap-[24px]'>
                            <div>
                                <h6 className='headingTxt text-[21px]'>About</h6>
                                <p className='labelTxt2 pt-[16px]'>About Intripid </p>
                                <p className='labelTxt2 pt-[16px]'>Our Travelers </p>
                                <p className='labelTxt2 pt-[16px]'>Contact Us</p>
                                <p className='labelTxt2 pt-[16px]'>FAQs</p>
                            </div>
                            <div>
                                <h6 className='headingTxt text-[21px]'>Solutions</h6>
                                <p className='labelTxt2 pt-[16px]'>Personalized Destinations </p>
                                <p className='labelTxt2 pt-[16px]'>Expert Travel Advisors </p>
                                <p className='labelTxt2 pt-[16px]'>Corporate Travel Planning</p>
                                <p className='labelTxt2 pt-[16px]'>Travel Sponsorship</p>
                                <p className='labelTxt2 pt-[16px]'>Travel Points & Rewards Integration</p>
                            </div>
                            <div>
                                <h6 className='headingTxt text-[21px]'>Pricing</h6>
                                <p className='labelTxt2 pt-[16px]'>Membership Plans </p>
                                <p className='labelTxt2 pt-[16px]'>Deals & Packages </p>
                                <p className='labelTxt2 pt-[16px]'>Vouchers</p>
                            </div>
                            <div>
                                <h6 className='headingTxt text-[21px]'>Resources</h6>
                                <p className='labelTxt2 pt-[16px]'>Intripid Brochure </p>
                                <p className='labelTxt2 pt-[16px]'>Executive Cutsheet </p>
                            </div>
                            <div>
                                <h6 className='headingTxt text-[21px]'>Support</h6>
                                <p className='labelTxt2 pt-[16px]'>Help Center </p> 
                            </div>
                            <div>
                                <h6 className='headingTxt text-[21px]'>Privacy & Safety</h6>
                                <p className='labelTxt2 pt-[16px]'>Terms & Conditions </p>
                                <p className='labelTxt2 pt-[16px]'>Privacy & Cookies Statement </p>
                                <p className='labelTxt2 pt-[16px]'>Security</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
