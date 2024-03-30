import React from 'react';
import { TbMessageCircle } from "react-icons/tb";
import { LuShare } from "react-icons/lu";
import { LiaExclamationCircleSolid } from "react-icons/lia";

function SideBar () {
    return (
        <div className=' absolute top-[360px] right-3'>
            <div className='h-[40px] w-[40px]  mt-[15px]   border-2 solid rounded-full flex justify-center items-center '>
            <TbMessageCircle className='text-[#0d0c22]   '/>
            <div className='  bg-white border-2 solid rounded-full absolute top-1 left-6 px-[3px] '>
            <span className='text-[12px] leading-[13px] font-[600]'>27</span>
            </div>
            </div>
            <div  className='h-[40px] w-[40px]  mt-[15px]    border-2 solid rounded-full flex justify-center items-center '>
            <LuShare className='text-[#0d0c22]   '/>
            </div>

             <div className='h-[40px] w-[40px]  mt-[15px]    border-2 solid rounded-full flex justify-center items-center '>
             <LiaExclamationCircleSolid  className='text-[#0d0c22]   '/>
             </div>
            


           



        </div>
    );
}

export default SideBar;