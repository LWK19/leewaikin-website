import React, {useId} from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

export function CustomLink(props:React.PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>){
    return (
        <Link to={props.href!} className={"group inline-block " + props.className} onClick={props.onClick!} viewTransition target={props.target}> 
            {props.children} 
            <span className="block w-0 group-hover:w-full transition-all h-0.5 bg-white"/>
        </Link>
    )
}

export function Button(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"mb-5 mr-7 place-items-end "+props.className}>
            <div className="block content-center text-2xl rounded-lg bg-accent1 min-w-24 min-h-10 text-black shadow-md shadow-black hover:text-white hover:mix-blend-hard-light transition-all duration-75 hover:cursor-pointer" onClick={props.onClick}>
                {props.children}
            </div>
        </div>
    )
}

export function Tag(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"inline-block content-center text-2xl rounded-lg bg-emerald-900 min-h-10 text-white px-2 m-1 shadow-lg " + (props.className?.includes("min-w-")?"":"min-w-24 ") + props.className}>
            {props.children}
        </div>
    )
}

type DropDownProps = {Header:React.ReactNode, Content:React.ReactNode} & React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>
export function Collapsible(props:DropDownProps){
    var hidden = true;
    function toggle(){
        if(hidden){
            hidden=false;
            const clientHeight = (ref.current?.childNodes[0] as HTMLElement)?.clientHeight.toString()
            document.getElementById(contentId)!.style.height = clientHeight+"px";
            document.getElementById(keyboardDownId)!.style.transform = "rotateX(180deg)";
        } else{
            hidden=true;
            document.getElementById(contentId)!.style.height = "0";
            document.getElementById(keyboardDownId)!.style.transform = "rotateX(0deg)";
        }
        
    }
    const ref = React.createRef<HTMLDivElement>()
    const ref2 = React.useRef<HTMLDivElement>(null);
    const contentId = useId();
    const keyboardDownId = useId();
    return (
        <div className={"first:mt-0 flex flex-col min-w-[50%] " + (props.className?.includes("m-")?"":"m-10 ") + props.className}>
            <div className="flex flex-row">
                <div className='grow text-left '>
                    <div className={"text-3xl " + props.className}>
                        {props.Header}
                    </div>
                </div>
                <i className="material-icons text-3xl mx-2 hover:cursor-pointer overflow-hidden origin-center transition-all h-auto" onClick={toggle} id={keyboardDownId}>keyboard_arrow_down</i>
            </div>
            <div ref={ref2} className="h-0 overflow-hidden transition-[height]" id={contentId}>
                <div className={"" + props.className} ref={ref}>
                    {props.Content}
                </div>
            </div>
        </div>
    )
}