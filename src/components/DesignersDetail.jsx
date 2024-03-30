import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiBookmarkLine } from "react-icons/ri";
import MoreDesignes from './MoreDesignes';
import SideBar from './SideBar';

function DesignersDetail(props) {
    return (
        <div className='flex'>
        <div className='px-[120px] py-[64px] '>
            <h1 className='h-[29px] mb-[10px] text-[#0d0c22] text-[24px] leading-[29px] font-[600] '>Ahead app redesign concept</h1>
           
            <div className='  flex justify-between items-center h-[72px] mb-[19px]  '>
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
        <video controls className='rounded-lg'>
        <source src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" type="video/mp4" />
         </video>
      {/* whole text div */}
      <div>
        <p>Hey all,</p>
        <p></p>
        <p>I've decided to make a redesign and animation for the <b>Ahead</b>
        I've decided to make a redesign and animation for the </p>
        <p></p>
        <p>Design-Figma</p>
        <p>Illustrations — Adobe Illustrator</p>
        <p>Animation — Adobe After Effects</p>
        <p></p>
        <p>************&npsp</p>
        <p>💌 I am open to new projects!&nbsp <b>hey@migulko</b></p>
        <p>************</p>
        <p>
            <span><b>Instagram</b>  &npsp | &nbsp</span>
            <span><b>Linkedin</b>  &npsp | &nbsp</span>
            <span><b>UI8</b>  &npsp | &nbsp</span>
        </p>
      </div>
      <div>
      <img src='https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?resize=640x3878' alt='image'/>
      </div>
      {/* designer details footer */}
      <div>  
        <div>
            <span className='h-[2px] w-full bg-[#0d0c22]'></span>
                <div>
                    <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='DesignerImg' 
                     className='h-[72x] w-[72px] mx-[24px] rounded-full bg-[#f3f3f4]'/>
                </div>
                <span className='h-[2px] w-full bg-[#0d0c22]'></span>
          </div>
          <div>Taras Migulko</div>
          <div>Email me hey@migulko.cz</div>
          <div className='box-border h-[40px] w-[117px]   bg-[#0d0c22] rounded-full pl-[24px] pr-[24px] flex items-center   ml-[24px]'>
                <button className='text-[14px] text-white'>Get in touch</button>
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