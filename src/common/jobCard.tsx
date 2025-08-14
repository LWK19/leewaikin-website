import React from 'react';
import '../main.css';

type JobCardProps = {Company: string, Position: string, Date: string, Image: string, Content: React.ReactNode} & React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>;
export default function JobCard(props:JobCardProps){
    return (<>
        <div className="hidden lg:block w-full mx-20 h-min-[50px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 ">
            <div className="flex-row flex m-10">
                <div className="self-center justify-items-center">
                    <img src={props.Image} alt="" className='justify-center rounded-full w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] object-cover object-center'/> 
                </div>
                <div className="text-2xl grow px-5 content-start self-center">
                    <div className="flex self-center">
                        <div className="text-4xl grow text-left">
                            {props.Company}
                        </div>
                        <div className="text-2xl content-end">
                            {props.Date} 
                        </div>
                    </div>
                    <div className="justify-self-start text-3xl col-span-5">
                        {props.Position} 
                    </div>
                </div>
            </div>
            <div className="m-10">
                {props.Content}
            </div>
        </div>
        <div className="lg:hidden w-3/4 mx-20 h-min-[50px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 p-5">
            <div className="self-center justify-items-center p-5">
                <img src={props.Image} alt="" className='justify-center rounded-full w-[100px] h-[100px] object-cover object-center'/> 
            </div>
            <div className="text-3xl grow text-center">
                {props.Company}
            </div>
            <div className="text-2xl col-span-5">
                {props.Position} 
            </div>
            <div className="text-xl content-end">
                {props.Date} 
            </div>
            <div className="text-xl pt-5">
                {props.Content}
            </div>
        </div>
    </>)
}