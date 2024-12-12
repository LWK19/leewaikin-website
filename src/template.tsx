import React, {useId} from 'react';
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
        <Link to={props.href!} className="group inline-block" onClick={props.onClick!} viewTransition target={props.target}> 
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
        <div className="grow items-center flex flex-col">
            {props.children}
        </div>
        
    );
}

export function Title(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="pb-5 w-full text-6xl">
            {props.children}
        </div>
    )
}

// Content
export function BoxContainer(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className="flex w-full flex-wrap flex-col justify-center content-center h-auto items-start lg:flex-row gap-x-[100px]">
            {props.children}
        </div>
    ) 
}

export function Box(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"w-[400px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 h-full flex " + props.className}>
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

export function Button(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"mb-5 mr-7 place-items-end "+props.className}>
            <div className="block content-center text-2xl rounded-lg bg-accent1 min-w-24 min-h-10 text-black shadow-md shadow-black hover:text-white hover:mix-blend-hard-light transition-all duration-75 hover:cursor-pointer" onClick={props.onClick}>
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
        <div className="text-5xl border-b border-white w-3/4 mb-10">
            {props.children}
        </div>
    )
}

export function SectionContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-xl w-full justify-items-center " + props.className}>
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
            <div>
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

export function Card(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"w-full mx-20 flex-row h-min-[50px] rounded-4xl bg-bg-elevate shadow-md shadow-black mb-20 flex " + props.className}>
            {props.children} 
        </div>
    )
}
export function CardImage(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"self-center min-w-[250px]" + props.className}>
            {props.children} 
        </div>
    )
}
export function CardHeader(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"flex self-center" + props.className}>
            {props.children} 
        </div>
    )
}
export function CardTitle(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-4xl grow text-left " + props.className}>
            {props.children} 
        </div>
    )
}
export function CardSubtitle(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"justify-self-start text-3xl col-span-5 pb-10 " + props.className}>
            {props.children} 
        </div>
    )
}
export function CardDate(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-2xl content-end" + props.className}>
            {props.children} 
        </div>
    )
}
export function CardContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-2xl grow p-10 content-start" + props.className}>
            {props.children}
        </div>
    )
}

export function ContentDivider(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <div className={"border-white border-b-[0.2px] w-1/2 h-0 opacity-50 my-10 " + props.className}/>
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
    const contentId = useId();
    const keyboardDownId = useId();
    return (
        <div className={"first:mt-0 flex flex-col min-w-[50%] " + (props.className?.includes("m-")?"":"m-10 ") + props.className}>
            <div className="flex flex-row">
                <div className='grow text-left '>{props.Header}</div>
                <i className="material-icons text-3xl mx-2 hover:cursor-pointer overflow-hidden origin-center transition-all h-auto" onClick={toggle} id={keyboardDownId}>keyboard_arrow_down</i>
            </div>
            <div ref={ref} className="h-0 overflow-hidden transition-[height]" id={contentId}>{props.Content}</div>
        </div>
    )
}

export function CollapsibleHeader(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    return (
        <div className={"text-3xl " + props.className}>
            {props.children}
        </div>
    )
}

export function CollapsibleContent(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>){
    const ref = React.useRef<HTMLDivElement>(null);
    return (
        <div className={"" + props.className} ref={ref}>
            {props.children}
        </div>
    )
}