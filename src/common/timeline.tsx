import React from 'react';
import '../main.css';

type TimelineProps = {Times:string[], Content:React.ReactNode[]} & React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>
function Timeline(props:TimelineProps){
    return (
        <div className="grid grid-cols-5">
            { 
                props.Content.map((node, index) => (<>
                    <div className="col-span-1">{props.Times[index]}</div> 
                    <div className="col-span-4"></div> 
                    <TimelineLine />
                    <div className="col-span-4">{node}</div> 
                </>))
            }
            <div className="col-span-1">{props.Times.at(-1)}</div> 
        </div>
    )
}

function TimelineLine(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className="w-full h-full flex flex-col place-items-center">
            <div className="w-[3px] h-[3px] rounded-full bg-white my-1"/>
            <div className="grow w-[1px] bg-white"/>
            <div className="w-[3px] h-[3px] rounded-full bg-white my-1"/>
        </div>
    )
}

export default Timeline;