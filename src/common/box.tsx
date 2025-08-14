import React from 'react';
import '../main.css';

export function BoxContainer(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="flex w-full flex-wrap flex-col justify-center content-center h-auto items-start lg:flex-row gap-x-[100px]">
            {props.children}
        </div>
    ) 
}

export function Box(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"w-3/4 lg:w-[400px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 h-full flex " + props.className}>
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
        <div className={"text-2xl p-5 grow content-center " + props.className}>
            {props.children}
        </div>
    )
}
