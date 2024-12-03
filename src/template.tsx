import React from 'react';
import './main.css';

export function NavBar(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="bg-slate-800 sticky top-0 w-full border-b border-slate-400 ">
            <div className="min-h-20 flex flex-row items-center text-xl divide-x divide-slate-400">
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
                    <a href="./contact"> Contact </a>
                </div>
            </div>
        </div>
    );
}

export function Content(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="p-5">
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
        <div className="">
            {props.children}
        </div>
    ) 
}

export function Box(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="border w-1/2 m-auto p-4 rounded-lg bg-slate-800 border-slate-700 shadow-lg shadow-gray-500/30 mb-20">
            {props.children} 
        </div>
    )
}

export function BoxTitle(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-3xl pt-2 pb-5">
            {props.children}
        </div>
    )
}

export function BoxContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="text-xl p-2">
            {props.children}
        </div>
    )
}