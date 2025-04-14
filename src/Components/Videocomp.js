import RHS from "./RHS";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";

function Videocomp() {
    return ( 
        <>
        <div className="mt-10 ml-14 shadow-xl h-[100vh] flex">
            <div className="flex-1">
            <iframe className="border-[1px] rounded-xl border-[#282828]"
                width="780" height="400" src="https://www.youtube.com/embed/tnFAQxc9Ll4" title="Best of Color Burst Dolby Vision HDR 60FPS 4K Video ULTRA HD - 8K / 4K TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <div className="text-white mt-4">
                <p className="text-[20px] font-bold">How I went from 0 to Google being from Mechanical Engineering | Full Story</p>
            </div>
            <div className="flex place-items-center mt-4 text-white">
                <img className="border-[1px] mr-2 border-[#4b4b4b] size-10 rounded-full" src="https://yt3.ggpht.com/HiUBuWFlR3mAV7syogp0rakopxCP8ACn6fXO_f-muIVNcnPNOpbmP1QSs2hJBupcZzZxdMIL=s88-c-k-c0x00ffffff-no-rj"/>
                <p className="text-white">Kodnest
                <p className="text-white text-[10px] opacity-55">102K Subscribers</p>
                </p>
                <p className="border-[1px] ml-8 w-[90px] text-center text-[12px] font-bold rounded-full py-1 text-black bg-[white]">Subscribe</p>

                <div className=" bg-[#434343] rounded-full ml-56 flex gap-2 place-items-center py-1 px-1">

                <div className="text-white flex ">
                <BiSolidLike />
                <p className="text-[12px] ml-1">8.6K</p>
                </div>
    
                <div className="border-l-[1px] px-1 ">
                <BiSolidDislike size={[18]} color="grey" />
                </div>
                </div>
                <div className="flex place-items-center gap-1 bg-[#434343] ml-3 rounded-full px-1 py-1 pr-2">
                <RiShareForwardLine size={18} />
                <p className="text-[12px]" >Share</p>
                </div>
                <div className="flex place-items-center gap-2  bg-[#434343] ml-3  rounded-full px-2 py-1 pr-2">
                <TfiDownload  size={12} />
                <p className="text-[12px]" >Download</p>
                </div>
                <div className="bg-[#434343]  ml-3 rounded-full p-1">
                <BsThreeDots />

                </div>
            </div>
            </div>
            
            <div className="flex-1">
            <RHS />
            </div>
        </div>
        
        
        </>
     );
}

export default Videocomp;