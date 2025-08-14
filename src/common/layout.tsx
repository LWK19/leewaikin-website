import React from 'react';
import {CustomLink} from './utils.tsx';
import '../main.css';

export function NavBar(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="bg-black sticky top-0 w-full hidden lg:block z-50">
            <div className="h-20 flex flex-row items-center text-2xl ">
                <div className="text-4xl text-start pl-10 grow ">
                    <CustomLink href="./"> Lee Wai Kin </CustomLink>
                </div>
                <div className="px-6">
                    <CustomLink href="./about"> About Me </CustomLink>
                </div>
                <div className="px-6">
                    <CustomLink href="./experience"> Work Experience </CustomLink>
                </div>
                <div className="px-6">
                    <CustomLink href="./projects"> Projects </CustomLink>
                </div>
                <div className="px-6">
                    <CustomLink href="./contact"> Contact Me </CustomLink>
                </div>
            </div>
        </div>
    );
}

export function SideBar(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    function revealSideBar() {
        document.getElementById("sidebar")!.style.width = "60%";
        document.getElementById("sidebar")!.style.paddingLeft = "5rem";
        document.getElementById("sidebar")!.style.paddingRight = "5rem";
        document.addEventListener('click', unfocus);
    }
    function hideSideBar() {
        console.log("hide")
        document.getElementById("sidebar")!.style.width = "0px";
        document.getElementById("sidebar")!.style.paddingLeft = "0";
        document.getElementById("sidebar")!.style.paddingRight = "0";
        document.removeEventListener('click', unfocus);
    }
    function unfocus(event :any) {
        const element = document.getElementById("sidebar")!;
        const hamelement = document.getElementById("sidebar-hamburger")!;
        if (!element.contains(event.target) && !hamelement.contains(event.target)) { 
            hideSideBar();
        }
    }
    return (
        <div className="sticky z-50 top-0 bg-black lg:hidden">
            <div className="">
                <button className="text-3xl p-5 flex " id="sidebar-hamburger" onClick={revealSideBar}> <i className="material-icons text-3xl pr-2">menu</i> Menu</button>
            </div>
            <div className="transition-[width] ease-in-out bg-black fixed top-0 h-full w-0 block overflow-hidden text-nowrap" id="sidebar">
                <div className="flex flex-col items-center text-2xl">
                    <div className="pt-5 pb-3">
                        <button onClick={hideSideBar}> 
                        <i className="material-icons text-5xl">close</i>
                         </button>
                    </div>
                    <hr className='w-full bg-white'/>
                    <div className="text-4xl py-8 grow">
                        <CustomLink href="./" onClick={hideSideBar}> Lee Wai Kin </CustomLink>
                    </div>
                    <div className="py-3">
                        <CustomLink href="./about" onClick={hideSideBar}> About Me </CustomLink>
                    </div>
                    <div className="py-3">
                        <CustomLink href="./experience" onClick={hideSideBar}> Work Experience </CustomLink>
                    </div>
                    <div className="py-3">
                        <CustomLink href="./projects" onClick={hideSideBar}> Projects </CustomLink>
                    </div>
                    <div className="py-3">
                        <CustomLink href="./contact" onClick={hideSideBar}> Contact </CustomLink>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export function Footer(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="bg-black bottom-0 w-full block">
            <div className="min-h-10 items-center flex justify-center text-xl font-extralight"> 
                &copy; 2024 - 2025 LWK
            </div>
        </div>
    )
}
