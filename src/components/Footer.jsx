// import React from 'react'
// import CenterMenu from './CenterMenu'
// import {Facebook, YouTube, Twitter, LinkedIn } from '@material-ui/icons'

// function Footer() {
//     const SocialStyle = "rounded-full border-2 border-white p-2 mr-[5rem]"
//   return (
//    <div className="footer flex flex-col items-center justify-start
//    px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">

//     <CenterMenu />

//     {/* SOCIAL ICONS  */}
//     <div className="flex w-[100%] justify-center mt-14">
//         <div className={SocialStyle}><Facebook /></div>{""}
//         <div className={SocialStyle}><Twitter /></div>{""}
//         <div className={SocialStyle}><YouTube/></div>{""}
//         <div className={SocialStyle}><LinkedIn /></div>{""}
//     </div>

//     {/* DETAILS  */}
//     <span className="text-[1rem] text-gray-400 px-[15rem]
//      text-center mt-[4rem]">
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//       eos quidem similique distinctio sed magni, i animi. Quasi
//      </span>
//    </div>
//   )
// }

// export default Footer







import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>{" "}
        <div className={SocialStyle}>
          <Twitter />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTube/>
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;