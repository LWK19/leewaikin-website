import React from 'react';
import './main.css';

export function NavBar(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="bg-black sticky top-0 w-full hidden lg:block">
            <div className="min-h-20 flex flex-row items-center text-2xl "> { /*divide-x divide-slate-400*/}
                <div className="text-4xl text-start pl-10 grow">
                    <a href="./"> Lee Wai Kin </a>
                </div>
                <div className="px-6">
                    <a href="./about"> About Me </a>
                </div>
                <div className="px-6">
                    <a href="./experience"> Work Experience </a>
                </div>
                <div className="px-6">
                    <a href="./projects"> Projects </a>
                </div>
                <div className="px-6">
                    <a href="./contact"> Contact Me </a>
                </div>
            </div>
        </div>
    );
}

export function SideBar(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    function revealSideBar() {
        document.getElementById("sidebar")!.style.display = "block";
        document.addEventListener('click', unfocus);
    }
    function hideSideBar() {
        document.getElementById("sidebar")!.style.display = "none";
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
        <div className="sticky top-0 bg-black lg:hidden">
            <div className="">
                <button className=" block text-3xl p-5" id="sidebar-hamburger" onClick={revealSideBar}> &#9776; Menu</button>
            </div>
            <div className="bg-black fixed top-0 h-full hidden px-10" id="sidebar">
                <div className="flex flex-col items-center text-xl">
                    <div className="p-5 text-3xl">
                        <button onClick={hideSideBar}> X </button>
                    </div>
                    <hr className='w-full bg-white'/>
                    <div className="text-5xl text-start py-10 grow">
                        <a href="./"> Lee Wai Kin </a>
                    </div>
                    <div className="py-6">
                        <a href="./about"> About Me </a>
                    </div>
                    <div className="py-6">
                        <a href="./experience"> Work Experience </a>
                    </div>
                    <div className="py-6">
                        <a href="./projects"> Projects </a>
                    </div>
                    <div className="py-6">
                        <a href="./contact"> Contact </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export function Content(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="items-center">
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
        <div className="flex w-full flex-col lg:flex-row">
            {props.children}
        </div>
    ) 
}

export function Box(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="w-[400px] m-auto rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 h-[450px] flex flex-col">
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
        <div className="place-items-end hover:cursor-pointer">
            <div className="block content-center text-2xl rounded-lg bg-accent1 min-w-24 min-h-10 text-black mb-5 mr-7 shadow-md shadow-black" onClick={props.onClick}>
                {props.children}
            </div>
        </div>
        
    )
}

export function Section(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="items-center m-auto flex flex-col lg:h-[calc(100vh-5rem)] w-full">
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