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
            <div className=" container pt-[72px] pb-[44px] flex flex-col xl:flex-row  justify-between items-center  xl:h-[30px] px-[32px]  max-w-[1234.67px] bg-white text-[#0d0c22]">
<div className="  justify-center xl:justify-start ">
    <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-[30px] w-[104px] text-[#0d0c22] bg-contain'/>
</div>   
<div className="flex justify-evenly  mt-[50px]  xl:mt-px  self-center ">
    <ul className="flex   flex-wrap  ">
        <li className="mx-1 md:mr-5 w-[98px] mt-[10px]  xl:mt-px  font-sans text-[14px] font-[600] text-[#0d0c22]">For designers</li>
        <li className="mx-1 md:mx-5 w-[78px] mt-[10px]  xl:mt-px font-sans text-[14px] font-[600] text-[#0d0c22]">Hire talent</li>
        <li className="mx-1 md:mx-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">Inspiration</li>
        <li className="mx-1 md:mx-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">Blog</li>
        <li className="mx-1  md:mx-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">About</li>
        <li className="mx-1  md:mx-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">About</li>
        <li className="mx-1  md:mx-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">Careers</li>
        <li className="mx-1  md:ml-5 font-sans mt-[10px]  xl:mt-px text-[14px] font-[600] text-[#0d0c22]">Support</li>
    </ul>
</div>



<div className="flex flex-wrap w-full  xl:w-[170px] justify-center xl:justify-end  mt-[50px]  xl:mt-px">
    <IoLogoInstagram className="mx-[8px] h-[18px] w-[18px]" />
    <FaFacebookSquare className="mx-[8px] h-[18px] w-[18px]" />
    <TiSocialTwitter className="mx-[8px]  h-[18px] w-[18px]" />
    <FaPinterest className="mx-[8px]  h-[18px] w-[18px]" />
</div>
</div>

            {/* lower footer */}
            <div className="container mx-auto py-8 flex flex-col xl:flex-row justify-between items-center  px-[32px]  max-w-[1234.67px] bg-white text-[#0d0c22]">
                <div className="w-full xl:w-1/2 ">
                    <ul className="flex flex-wrap justify-center xl:justify-start">
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">&copy; {new Date().getFullYear()} Dribbble</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Terms</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Privacy</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Cookies</li>
                    </ul>
                </div>
                <div className="w-full xl:w-1/2 mt-[30px]  xl:mt-px">
                    <ul className="flex flex-wrap justify-center xl:justify-end">
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Jobs</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Designers</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Freelancers</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Tags</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Places</li>
                        <li className="mx-2 mt-[10px]  xl:mt-px font-[400] text-[14px] leading-[20px] text-[#6e6d7a] font-sans">Resources</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;







 






 








//             <div className="container pt-12 pb-8 flex flex-col xl:flex-row justify-evenly items-center px-8 max-w-[1234.67px] bg-white text-[#0d0c22]">
// <div className="justify-center xl:justify-start">
//     <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-8 w-28 text-[#0d0c22] bg-contain'/>
// </div>   
// <div className="flex justify-evenly flex-wrap w-full self-center ">
//     <ul className="flex flex-wrap mx-auto xl:mx-0">
//         <li className="mx-1 md:mr-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">For designers</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">Hire talent</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">Inspiration</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">Blog</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">About</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">About</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">Careers</li>
//         <li className="mx-1 md:mx-5 mb-1 md:mb-0 w-1/2 md:w-auto font-sans text-sm md:text-base font-semibold text-[#0d0c22]">Support</li>
//     </ul>
// </div>
// <div className="flex flex-wrap w-full xl:w-1/3 justify-center xl:justify-end">
//     <IoLogoInstagram className="mx-2 md:mx-4 h-4 w-4 md:h-5 md:w-5" />
//     <FaFacebookSquare className="mx-2 md:mx-4 h-4 w-4 md:h-5 md:w-5" />
//     <TiSocialTwitter className="mx-2 md:mx-4 h-4 w-4 md:h-5 md:w-5" />
//     <FaPinterest className="mx-2 md:mx-4 h-4 w-4 md:h-5 md:w-5" />
// </div>
// </div>