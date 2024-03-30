import React from 'react';
import { TbMessageCircle } from "react-icons/tb";
import { LuShare } from "react-icons/lu";
import { LiaExclamationCircleSolid } from "react-icons/lia";

function SideBar () {
    return (
        <div>
            <div>
            <TbMessageCircle />
            </div>
            <LuShare />
            <LiaExclamationCircleSolid />

        </div>
    );
}

export default SideBar;