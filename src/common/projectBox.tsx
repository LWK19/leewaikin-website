import React from 'react';
import * as Utils from './utils.tsx';
import '../main.css';

type ProjectBoxProps = {Title: string, Description: string, Image: string, Link: React.MouseEventHandler<HTMLDivElement>, Tags: string[]} & React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>;
export default function ProjectBox(props:ProjectBoxProps){
    return (
        <div className="w-[400px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 h-full flex flex-col">
            <div className='h-1/2 flex justify-center mt-5'> 
                <img className="rounded-t-4xl align-middle object-contain w-full h-[100px]" src={props.Image} alt=""/> 
            </div>

            <div className="text-2xl p-5 grow content-center"> 
                <div className="text-4xl mb-5">
                    {props.Title}
                </div>
                <div className="text-2xl text-justify">
                    {props.Description}
                </div> 
            </div>
            <div className='flex flex-row items-start'>
                <div className="flex grow self-start ml-5"> 
                    {props.Tags.map((tag, index) => (
                        <Utils.Tag className="mt-0 text-xl min-w-16 mb-5">{tag}</Utils.Tag>
                    ))}
                </div>
                {/* Legacy button for more details
                <Utils.Button className="inline-block" onClick={props.Link}> More... </Utils.Button>
                 */}
            </div>
        </div>
    )
}