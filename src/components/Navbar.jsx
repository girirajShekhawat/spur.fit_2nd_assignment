import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

Navbar.propTypes = {
    
};

function Navbar(props) {
    return (
        <div className='box-border w-full h-[100px]  flex justify-between items-center md:px-[40px] xl:px-[24px] '>
            <div className='  h-[14px] w-[475px] flex items-center md:max-xl:ml-[120px] xl'>
                <ul className=' box-border flex    font-sans text-[14px] font-[600] leading-[28px] text-[#0d0c22]'>
                      
                <li className=' w-[138px] pr-[16px]  flex '>
                Find designers
            <FaAngleDown className='ml-2 mt-2'/> 
                 </li>
                    <li className='px-[16px]'>Inspiration</li>
                    <li className='px-[16px] flex' >Courses <FaAngleDown className='ml-2 mt-2'/> </li>
                    <li className='px-[16px]'>Jobs</li>
                    <li className='px-[16px] w-[79px]'>Go Pro</li>
                     
                   
                </ul>
  
            </div>
            <div className='h-[30px] w-[90px] box-border  md:absolute left-0 md:ml-[40px] xl:static  '>
                <div>
                    <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-[30px] w-[90px] bg-contain'/>
                </div>
                
            </div>          
            <div className='h-[48px] flex flex-row   items-center justify-end'>
                <div  >
            <form  >
                <div className="sm:max-lg:collapse box-border flex items-center justify-between relative   h-[48px] w-[200px] bg-[#f4f5fb]  rounded-full pl-[48px] pr-[24px]">
                <IoSearch className='absolute   left-[24px] h-[16px] w-[16px] text-[#6e6d7a]  sm:max-lg:visible  sm:max-lg:h-[20px] sm:max-lg:w-[20px] sm:max-lg:text-[#0d0c22]
                  sm:max-lg:left-[180px]  sm:max-lg:top-[16px] '/>
                <input type='text' placeholder='Search...'
                className='outline-none w-full h-[23px] opacity-50  bg-[#f4f5fb]  font-sans text-[14px] leading-[1px] font-[400]       '/>  
                </div>
            </form>
                
           

            </div>
            <div className='box-border   w-[39.1px] ml-[24px] mt-[6px] bg-transparent text-[14px] font-sans  mb-[5px] '>
                <button className="text-[#0d0c22] h-[40px] ">Log in</button>
            </div>
            <div className='box-border h-[48px]  w-[99.61px] bg-black rounded-full pl-[24px] pr-[24px] flex items-center   ml-[24px]'>
                <button className='text-[14px] text-white'>sign up</button>
            </div>
            </div>
            
        </div>
    );
}

export default Navbar;







 
