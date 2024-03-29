// 




import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";

function Footer(props) {
    return (
        <>
            {/* upper footer */}
            <div className=" container pt-[72px] pb-[44px] flex flex-col xl:flex-row justify-between items-center h-[30px] px-[32px] w-[1200px] bg-white text-[#0d0c22]">
                <div className="w-full xl:w-1/3 justify-center xl:justify-start ">
                    <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-[30px] w-[104px] text-[#0d0c22] bg-contain'/>
                </div>   
                <div className="flex justify-evenly flex-wrap  w-full xl:w-1/3">
                    <ul className="flex justify-center xl:justify-center ">
                        <li className="mx-2 w-[98px]">For designers</li>
                        <li className="mx-2 w-[78px]">Hire talent</li>
                        <li className="mx-2">Inspiration</li>
                        <li className="mx-2">Blog</li>
                        <li className="mx-2">About</li>
                        <li className="mx-2">Careers</li>
                        <li className="mx-2">Support</li>
                    </ul>
                </div>
                <div className="flex flex-wrap w-full xl:w-1/3 justify-center xl:justify-end  ">
                    <IoLogoInstagram className="mx-[8px] h-[18px] w-[18px]" />
                    <FaFacebookSquare className="mx-[8px] h-[18px] w-[18px]" />
                    <TiSocialTwitter className="mx-[8px]  h-[18px] w-[18px]" />
                    <FaPinterest className="mx-[8px]  h-[18px] w-[18px]" />
                </div>
            </div>
            {/* lower footer */}
            <div className="container mx-auto py-8 flex flex-col xl:flex-row justify-between items-center px-[32px] w-[1200px] bg-white text-[#0d0c22]">
                <div className="w-full xl:w-1/2">
                    <ul className="flex justify-center xl:justify-start">
                        <li className="mx-2">&copy; {new Date().getFullYear()} Dribbble</li>
                        <li className="mx-2">Terms</li>
                        <li className="mx-2">Privacy</li>
                        <li className="mx-2">Cookies</li>
                    </ul>
                </div>
                <div className="w-full xl:w-1/2">
                    <ul className="flex justify-center xl:justify-end">
                        <li className="mx-2">Jobs</li>
                        <li className="mx-2">Designers</li>
                        <li className="mx-2">Freelancers</li>
                        <li className="mx-2">Tags</li>
                        <li className="mx-2">Places</li>
                        <li className="mx-2">Resources</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
