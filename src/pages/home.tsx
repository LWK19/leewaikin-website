import '../main.css';
import React, { useEffect } from 'react';
//import * as T from '../template.tsx';


function Home(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    function showAnimations() {
        document.getElementById("top-long-hori")!.style.width = "0";
        document.getElementById("top-vert")!.style.height = "0";
        document.getElementById("top-short-hori")!.style.width = "0";
        document.getElementById("top-slash-1")!.style.height = "0";
        document.getElementById("top-slash-2")!.style.height = "0";
        document.getElementById("bot-long-hori")!.style.width = "0";
        document.getElementById("bot-vert")!.style.height = "0";
        document.getElementById("bot-short-hori")!.style.width = "0";
        document.getElementById("bot-slash-1")!.style.height = "0";
        document.getElementById("bot-slash-2")!.style.height = "0";
        document.getElementById("main-text")!.style.opacity = "1";
    }
    useEffect(showAnimations)
    return (
        <>
            <div className="w-full text-9xl self-stretch content-center grow relative bg-black">
                <div className="border-[3px] border-white origin-center rotate-[60deg] w-[55px] h-[0px] absolute top-[calc(50%-140px)] left-[calc(50%-298px)] translate-y-[-50%] translate-x-[-50%] z-[3]"/>
                <div className="border-[3px] border-white origin-center rotate-[60deg] w-[55px] h-[0px] absolute top-[calc(50%-140px)] left-[calc(50%-268px)] translate-y-[-50%] translate-x-[-50%] z-[3]"/>
                <div className="absolute w-[70px] h-[80px] top-[calc(50%-140px)] left-[calc(50%-283px)] translate-y-[-50%] translate-x-[-50%] bg-black z-[2]"/>
                <div className="border-[6px] border-white h-[290px] w-[725px] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1]"/>
                <div className="border-[3px] border-white origin-center rotate-[60deg] w-[55px] h-[0px] absolute top-[calc(50%+140px)] left-[calc(50%+298px)] translate-y-[-50%] translate-x-[-50%] z-[3]"/>
                <div className="border-[3px] border-white origin-center rotate-[60deg] w-[55px] h-[0px] absolute top-[calc(50%+140px)] left-[calc(50%+268px)] translate-y-[-50%] translate-x-[-50%] z-[3]"/>
                <div className="absolute w-[70px] h-[80px] top-[calc(50%+140px)] left-[calc(50%+283px)] translate-y-[-50%] translate-x-[-50%] bg-black z-[2]"/>
                
                {/* Animation Masks*/}
                <div className="absolute w-[611px] h-[10px] top-[calc(50%-142px)] left-[calc(50%-248px)] translate-y-[-50%] bg-black z-[5] transition-all duration-500 ease-out delay-[1100ms]" id="top-long-hori"/>
                <div className="absolute w-[10px] h-[290px] top-[calc(50%-145px)] left-[calc(50%+360px)] translate-x-[-50%] bg-black z-[5] transition-all duration-300 ease-out delay-[800ms]" id="top-vert"/>
                <div className="absolute w-[45px] h-[10px] top-[calc(50%+142px)] left-[calc(50%+363px)] translate-y-[-50%] translate-x-[-100%] bg-black z-[5] transition-all ease-out duration-300 delay-500" id="top-short-hori"/>

                <div className="absolute w-[70px] h-[30px] top-[calc(50%-112px)] left-[calc(50%-283px)] translate-y-[-100%] translate-x-[-50%] bg-black z-[5] transition-all ease-out duration-500" id="top-slash-1"/>
                <div className="absolute w-[70px] h-[30px] top-[calc(50%-172px)] left-[calc(50%-283px)] translate-x-[-50%] bg-black z-[5] transition-all ease-out duration-500" id="top-slash-2"/>
                
                <div className="absolute w-[611px] h-[10px] top-[calc(50%+142px)] left-[calc(50%+249px)] translate-y-[-50%] translate-x-[-100%] bg-black z-[5] transition-all ease-out duration-500 delay-[1100ms]" id="bot-long-hori"/>
                <div className="absolute w-[10px] h-[290px] top-[calc(50%+145px)] left-[calc(50%-360px)] translate-y-[-100%] translate-x-[-50%] bg-black z-[5] transition-all ease-out duration-300 delay-[800ms]" id="bot-vert"/>
                <div className="absolute w-[45px] h-[10px] top-[calc(50%-142px)] left-[calc(50%-363px)] translate-y-[-50%] bg-black z-[5] transition-all ease-out duration-500 delay-500" id="bot-short-hori"/>

                <div className="absolute w-[70px] h-[30px] top-[calc(50%+172px)] left-[calc(50%+283px)] translate-y-[-100%] translate-x-[-50%] bg-black z-[5] transition-all ease-out duration-500" id="bot-slash-1"/>
                <div className="absolute w-[70px] h-[30px] top-[calc(50%+112px)] left-[calc(50%+283px)] translate-x-[-50%] bg-black z-[5] transition-all ease-out duration-500" id="bot-slash-2"/>

                <div className="opacity-0 transition-opacity ease-in-out duration-1000" id="main-text">
                    <div className="inline">L</div>
                    <div className="inline px-12">W</div>
                    <div className="inline">K</div>
                </div>
                
            </div>
        </>
    );
}

export default Home;