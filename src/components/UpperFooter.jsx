import React from 'react';

function UpperFooter(props) {
    return (
        <div className='h-[171px] w-full md:collapse flex '>
            <div className='h-[22px] w-[22px] border-1 border-gray-200 border-solid shadow-xl ml-2'>L</div>
            <div className='h-[22px] w-[22px] border-1 border-gray-200 border-solid shadow-xl ml-2'>F</div>
            <div className='h-[22px] w-[22px] border-1 border-gray-200 border-solid shadow-xl ml-2'>Like</div>
            
        </div>
    );
}

export default UpperFooter;