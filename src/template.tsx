import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

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
                <div className="flex flex-col items-center text-xl">
                    <div className="pt-5 pb-3">
                        <button onClick={hideSideBar}> 
                        <i className="material-icons text-5xl">close</i>
                         </button>
                    </div>
                    <hr className='w-full bg-white'/>
                    <div className="text-5xl py-10 grow">
                        <CustomLink href="./" onClick={hideSideBar}> Lee Wai Kin </CustomLink>
                    </div>
                    <div className="py-6">
                        <CustomLink href="./about" onClick={hideSideBar}> About Me </CustomLink>
                    </div>
                    <div className="py-6">
                        <CustomLink href="./experience" onClick={hideSideBar}> Work Experience </CustomLink>
                    </div>
                    <div className="py-6">
                        <CustomLink href="./projects" onClick={hideSideBar}> Projects </CustomLink>
                    </div>
                    <div className="py-6">
                        <CustomLink href="./contact" onClick={hideSideBar}> Contact </CustomLink>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export function CustomLink(props:React.PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>){
    return (
        <Link to={props.href!} className="group inline-block" onClick={props.onClick!} viewTransition> 
            {props.children} 
            <span className="block w-0 group-hover:w-full transition-all h-0.5 bg-white"/>
        </Link>
    )
}

export function Footer(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="bg-black bottom-0 w-full block">
            <div className="min-h-10 items-center flex justify-center text-xl font-extralight"> 
                &copy; 2024 LWK
            </div>
        </div>
    )
}

export function Content(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="grow items-center">
            {props.children}
        </div>
        
    );
}

export function Title(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="pt-5 pb-16 w-full text-5xl">
            {props.children}
        </div>
    )
}

// Content
export function BoxContainer(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="flex w-full flex-wrap flex-col justify-center content-center h-auto lg:flex-row gap-x-[100px]">
            {props.children}
        </div>
    ) 
}

export function Box(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="w-[400px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 h-[450px] flex flex-col">
            {props.children} 
        </div>
    )
}

export function BoxTitle(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-4xl pt-3 pb-2">
            {props.children}
        </div>
    )
}
export function BoxHeader(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={props.className!}>
            {props.children}
        </div>
    )
}
export function BoxContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-2xl p-2 grow content-center " + props.className}>
            {props.children}
        </div>
    )
}

export function Button(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="group mb-5 mr-7 place-items-end hover:cursor-pointer">
            <div className="block content-center text-2xl rounded-lg bg-accent1 min-w-24 min-h-10 text-black shadow-md shadow-black group-hover:text-white group-hover:mix-blend-hard-light transition-all" onClick={props.onClick}>
                {props.children}
            </div>
        </div>
        
    )
}

export function Section(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="first:pt-[1rem] first:min-h-[calc(100vh-5rem)] last:pb-0 last:min-h-[calc(100vh-2.5rem)] first:last:min-h-[calc(100vh-7.5rem)] pt-[6rem] pb-10 items-center m-auto flex flex-col lg:min-h-[100vh] w-full" id={props.id}>
            {props.children}
        </div>
    )
}

export function SectionHeader(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-4xl border-b border-white w-3/4 mb-10">
            {props.children}
        </div>
    )
}

export function SectionContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-xl">
            {props.children}
        </div>
    )
}

export function Timeline(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="grid grid-cols-5">
            {props.children}
        </div>
    )
}


export function Date(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="">
            {props.children}
        </div>
    )
}

export function Entry(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="col-span-4">
            {props.children}
        </div>
    )
}

export function TimelineLine(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="w-full h-full flex flex-col place-items-center">
            <div className="w-[3px] h-[3px] rounded-full bg-white my-1"/>
            <div className="grow w-[1px] bg-white"/>
            <div className="w-[3px] h-[3px] rounded-full bg-white my-1"/>
        </div>
    )
}

export function Paragraph(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="ml-10 justify-items-start">
            {props.children}
        </div>
    )
}

export function BulletPoint(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-left flex">
            <div className="pr-2"> - </div>
            {props.children}
        </div>
    )
}

export function Tag(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="inline-block content-center text-2xl rounded-lg bg-emerald-900 min-w-24 min-h-10 text-white px-2 mb-5 mr-7 shadow-lg">
            {props.children}
        </div>
    )
}