import React from 'react';
import "../index.css"

function VideoComponent(props) {
    return (
        <div>
             <video autoPlay  loop muted preload='auto' className='rounded-lg  '>
                <source src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" type="video/mp4" />
            </video>
  
        </div>
    );
}

export default VideoComponent;