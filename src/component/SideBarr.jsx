import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

export default function SideBar() {
  return (
    <>
      <div className="sideBar">

        <div className="sideBC">
          <div ><GoHomeFill className="sidebarIcons" /></div>
          <div className="sidebarIconName"><p>Home</p></div>
        </div>
        <div className="sideBC">
          <div ><SiYoutubeshorts className="sidebarIcons" /></div>
          <div className="sidebarIconName"><p>Shots</p></div>
        </div>
        <div className="sideBC">
          <div ><MdOutlineSubscriptions className="sidebarIcons" /></div>
          <div className="sidebarIconName"><p>Subscription</p></div>
        </div>
        <div className="line"></div>

      </div>
    </>
  );
}
