import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiBookmarkLine } from "react-icons/ri";
import MoreDesignes from './MoreDesignes';
import SideBar from './SideBar';
import VideoComponent from './VideoComponent';
 

function DesignersDetail(props) {
    return (
        <div className='flex'>
        <div className='px-[120px] py-[64px] '>
            <h1 className='h-[29px] mb-[10px] text-[#0d0c22] text-[24px] leading-[29px] font-[600] '>Ahead app redesign concept</h1>
           
           {/* designer's Headigng */}
            <div className='sticky top-0 z-10 bg-white flex justify-between items-center h-[72px] mb-[19px]  '>
                <div className='flex '>
                <div>
                    <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='DesignerImg' 
                     className='h-[48px] w-[48px] rounded-full bg-[#f3f3f4]'/>
                </div>
                <div className='flex flex-col h-[34px] w-[160.032px] justify-end ml-[15px] mt-[5px] '>
                    <div>
                    <p className='font-[600] text-[#0d0c22] leading-[14px] text-[14px] '>Taras Migulko</p>
                    </div>
                    <div className='flex mt-[5px] '>
                        
                         
                        <span class="relative flex h-[8px] w-[8px] mt-[1.7px] mr-[5px]">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4daa57] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#4daa57]"></span>
</span>

                        <span className='h-[12px] font-[500] text-[12px] text-[#4daa57] leading-[12px] font-sans'>Available for work</span>
                        <span className='h-[12px] font-[500] text-[12px] text-[#6e6d7a] leading-[12px] ml-[10px]'>Follow</span>
                    </div>
                    
                     
                </div>
            </div>
            <div className='flex items-center'>
                <div className='h-[40px] w-[40px]  border-2 solid rounded-full flex justify-center items-center '>
                <FaRegHeart className='text-[#0d0c22]   '/>
                </div> 
                <div className='h-[40px] w-[40px]  border-2 solid rounded-full flex justify-center items-center ml-[8px]' >
                <RiBookmarkLine className='text-[#0d0c22]' />
               </div>
             
            <div className='h-[40px] w-[117px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px]'>
                <button className='text-[13px] text-white h-[38px] w-[76px] leading-[13px] font-sans font-[600]'>Get in touch</button>
            </div>

            </div>

        </div>
{/* video div */}
        <div>
         
          <VideoComponent/>
      {/* whole text div */}
      <div className='  w-full flex flex-col items-center mt-[50px]'>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>Hey all,</p>
        <p></p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>I've decided to make a redesign and animation for the <span className='relative'>Ahead 
         <span className='absolute left-0 w-full h-[2.5px] bg-[#ea64d9] top-6'></span></span>
        I've decided to make a redesign and animation for the </p>
        <p></p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>Design-Figma</p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>Illustrations — Adobe Illustrator</p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>Animation — Adobe After Effects</p>
        <p></p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>************&nbsp;</p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans h-[32px] w-[752px] mt-[32px]'>💌 I am open to new projects!&nbsp;<span className='relative'>hey@migulko
        <span className='absolute left-0 w-full h-[2.5px] bg-[#ea64d9] top-7'></span></span></p>
        <p className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] h-[32px] w-[752px] mt-[32px]'>************</p>
        <p className='h-[32px] w-[752px] mt-[32px]'>
            <span className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans'><span className='relative'>Instagram<span className='absolute left-0 w-full h-[2.5px] bg-[#ea64d9] top-6'></span></span>    |   </span>
            <span className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans'><span className='relative'>Linkedin<span className='absolute left-0 w-full h-[2.5px] bg-[#ea64d9] top-6'></span></span>    |   </span>
            <span className='text-[20px] font-[400] leading-[32px] text-[#0d0c22] font-sans'><span className='relative'>UI8  <span className='absolute left-0 w-full h-[2.5px] bg-[#ea64d9] top-6'></span></span>      </span>
        </p>
      </div>
      <div className='w-full flex flex-col items-center my-[100px] '>
      <img src='https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?resize=640x3878' alt='image' className='w-[1023px] bg-cover h-[6000px]'/>
      </div>

 
      
    
       
      {/* designer's details footer */}
      <div className='flex flex-col mt-[32px] '>  
      <div className='flex justify-between h-20 items-center'>
    <span className='flex-1 h-[1.6px]  bg-gray-300'></span>
    <div className='mx-8'>
        <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='DesignerImg' className='h-16 w-16 rounded-full bg-gray-200' />
    </div>
    <span className='flex-1 h-[1.6px]   bg-gray-300'></span>
</div>     
 

 
          <div className='text-center text-[20px] font-[500] leading-[29px] mt-[16px] text-[#0d0c22] font-sans '>Taras Migulko</div>
          <div className='text-center text-[14px] font-[400] leading-[20px] mt-[8px] text-[#3d3d4e] font-sans '>Email me hey@migulko.cz</div>
            <div className=' self-center h-[40px] w-[117px] mt-[16px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px]'>
                <button className='text-[13px] text-white h-[38px] w-[76px] leading-[13px] font-sans font-[600]'>Get in touch</button>
            </div>
             
      </div>
        </div>
        <MoreDesignes/>
        </div>
        <SideBar/>
        </div>
    );
}

export default DesignersDetail;