import React from 'react';

function MoreDesignes(props) {
    return (
        <div className='mt-[64px]'>
            <div className='h-[28px] w-full flex justify-between mb-[10px]'>
                <h4 className='font-[700] text-[16px] leading-[24px] mr-[16px]'>More by Taras Migulko</h4>
                <p className='text-[#0d0c22] font-[400] text-[14px] leading-[28px]'>View profile</p>
            </div>
            <div className='flex justify-between wrap'>
                <div className='h-[170px] w-[227px]  '>
                    <img src='https://cdn.dribbble.com/userupload/4254484/file/still-b08b53f42e2641ed66963d951dd91db1.png?resize=800x600&vertical=center' alt="design"/>
                </div>
                <div className='h-[170px] w-[227px]   '>
                <img src='https://cdn.dribbble.com/userupload/4166227/file/still-8f09cd9b0c37f77b0da2766e8ece41a0.png?resize=800x600&vertical=center' alt="design"/>
                </div>
                <div className='h-[170px] w-[227px]   '>
                <img src='https://cdn.dribbble.com/userupload/4101859/file/still-1de3369e32f0ad46440c5f994b9b3baf.png?resize=800x600&vertical=center' alt="design"/>
                </div>
                <div className='h-[170px] w-[227px]   '>
                <img src='https://cdn.dribbble.com/userupload/3794059/file/still-95e8ff72b9834b894e6496fc5c42c8a6.png?resize=800x600&vertical=center' alt="design"/>
                </div>
            </div>
        </div>
    );
}

export default MoreDesignes;