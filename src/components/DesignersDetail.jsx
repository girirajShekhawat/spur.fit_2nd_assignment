import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

function DesignersDetail(props) {
    return (
        <div>
            <h1 className='h-[29px] mb-[29px] text-[#0d0c22]'>Ahead app redesign concept</h1>
           
            <div className='pt-[14px] pb-[10px]'>
                <div>
                <div>
                    <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='DesignerImg' 
                     className='h-[48px] w-[48px] rounded-full bg-[#f3f3f4]'/>
                </div>
                <div>
                    <div>
                    <p>Taras Migulko</p>
                    </div>
                    <div>
                        <span>green dot</span>
                        <p>Available for work</p>
                        <p>Follow</p>
                    </div>
                    
                     
                </div>
            </div>
            <div>
            <FaRegHeart />
            <CiBookmark />
            <div className='box-border h-[40px] w-[117px]   bg-[#0d0c22] rounded-full pl-[24px] pr-[24px] flex items-center   ml-[24px]'>
                <button className='text-[14px] text-white'>Get in touch</button>
            </div>

            </div>

        </div>
{/* video div */}
        <div>
        <video controls>
        <source src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" type="video/mp4" />
         
      </video>
      <div>
        <p>some text are there</p>
      </div>
      <img src='https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?resize=640x3878' alt='image'/>
        </div>
        </div>
    );
}

export default DesignersDetail;