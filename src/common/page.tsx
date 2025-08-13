import React from 'react';
import '../main.css';

export function Title(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="pb-5 w-full text-6xl">
            {props.children}
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
        <div className="text-5xl border-b border-white w-3/4 mb-10">
            {props.children}
        </div>
    )
}

export function SectionContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-2xl w-full justify-items-center " + props.className}>
            {props.children}
        </div>
    )
}

export function ContentDivider(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className={"border-white border-b-[0.2px] w-1/2 h-0 opacity-50 my-10 " + props.className}/>
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
            <div>
                {props.children}
            </div>
        </div>
    )
}