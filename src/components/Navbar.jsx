import React, { useState ,useEffect} from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "../index.css"
 

function Navbar(props) {
    const [isOpen , setIsOpen]=useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    useEffect(() => {
        if (viewportWidth < 1000) {
            setShowMenu(true);
        }
        if(viewportWidth>1000){
            setShowMenu(false)
        }
    }, [viewportWidth]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
       
    };
   

    return (
        <div className='box-border w-full h-[100px]  flex justify-between items-center px-[24px] md:px-[24px] lg:px-[40px] xl:px-[24px] '>
           
         {showMenu &&  <div className='dropdown mb-[5px] '>
    <label className="popup">
      <input type="checkbox" checked={isOpen}   />
      <div className="burger" tabIndex="0" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <nav className="popup-window">
          <legend>Actions</legend>
          <ul>
            <li>
              <button>
                <span > Find designers</span> 
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Inspiration</span>
              </button>
            </li>
            <li>
              <button>
                <span>Courses </span>
              </button>
            </li>
            <hr />
            <li>
              <button  >
                <span>Jobs</span>
              </button>
            </li>
            <li>
              <button >
                <span>Go Pro</span>
              </button>
            </li>
            <li>
              <button >
                <span>Log in</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </label>
    </div> 
}

         {!showMenu &&  <div className='  h-[14px] w-[475px] flex items-center md:max-xl:ml-[120px]  '>
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
          } 
           {/*this is for the viewport width >1000px  */}
         {
           !showMenu && <div className='h-[30px] w-[90px] box-border  md:absolute left-0 md:ml-[40px] xl:static'>
              <div>
                  <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-[30px] w-[90px] bg-contain'/>
              </div>
              
          </div>   
         }   
            {/*this is for the viewport width < 1000px  */}
            {showMenu &&  <div className='h-[30px] w-[90px] box-border  absolute left-20     xl:static'>
            <div>
                <img src='https://asset.brandfetch.io/idARbzjU7f/idpVFjkyhe.svg' alt="Logo" className='h-[30px] w-[90px] bg-contain'/>
            </div>
            
        </div>
            }  

            <div className='h-[48px] flex flex-row   items-center justify-end'>
                <div  >
            <form  >
                <div className="xs:max-lg:collapse  box-border flex items-center justify-between relative   h-[48px] w-[200px] bg-[#f4f5fb]  rounded-full pl-[48px] pr-[24px]">
                <IoSearch className='absolute   left-[24px] h-[16px] w-[16px] text-[#6e6d7a]  xs:max-lg:visible  xs:max-lg:h-[20px] xs:max-lg:w-[20px] xs:max-lg:text-[#0d0c22]
                  xs:max-lg:left-[180px]  xs:max-lg:top-[16px] '/>
                <input type='text' placeholder='Search...'
                className='outline-none w-full h-[23px] opacity-50  bg-[#f4f5fb]  font-sans text-[14px] leading-[1px] font-[400]       '/>  
                </div>
            </form>
                
           

            </div>
         {!showMenu &&   <div className='box-border   w-[39.1px] ml-[24px] mt-[6px] bg-transparent text-[14px] font-sans  mb-[5px] '>
                <button className="text-[#0d0c22] h-[40px] ">Log in</button>
            </div>}
            <div className='box-border h-[48px]  w-[99.61px] bg-black rounded-full pl-[24px] pr-[24px] flex items-center   ml-[24px]'>
                <button className='text-[14px] text-white'>sign up</button>
            </div>
            </div>
            
        </div>
    );
}

export default Navbar;







 
