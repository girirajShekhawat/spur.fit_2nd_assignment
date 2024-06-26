import React from 'react';

function UpperFooter(props) {
    return (

        <div className='h-44 w-full flex justify-center items-center md:visible collapse'>
    <div className='flex items-center justify-center h-8 w-8 border-2 solid border-gray-300 shadow-md rounded-md ml-2 
      text-[12px] font-[500] leading-[16px] text-gray-400'>L</div>
    <div className='flex items-center justify-center h-8 w-8 border-2 solid border-gray-300  shadow-lg rounded-md ml-2
      text-[12px] font-[500] leading-[16px] text-gray-400'>F</div>
    <div className='flex items-center justify-center h-8 w-20     ml-2
      text-[12px] font-[500] leading-[16px] text-gray-400'>Like</div>
</div>
    );
}

export default UpperFooter;





 