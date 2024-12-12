import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Projects(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Projects - Lee Wai Kin";
    function scrollTo(elementId: string) {
        document.documentElement.style.scrollBehavior = "smooth";
        document.getElementById(elementId)?.scrollIntoView();
        document.documentElement.style.scrollBehavior = "";
    }
    return (
        <>
            <T.Section>
                <T.Title>
                    My Projects
                </T.Title>
                <T.SectionContent>
                <T.BoxContainer> 
                    <T.Box className="flex-col">
                        <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-4xl mt-3 mb-5">
                                Portfolio Website
                            </div>
                            <div className="text-2xl text-justify">
                                My personal portfolio website that you are looking at right now. 
                            </div> 
                        </T.BoxContent>
                        <div className='flex flex-row items-start'>
                            <div className="flex grow self-start ml-5"> 
                                <T.Tag className="mt-0 text-xl min-w-16 self-start">SWE</T.Tag>
                                <T.Tag className="mt-0 text-xl min-w-16">Web Dev</T.Tag>
                            </div>
                            <T.Button className="inline-block" onClick={() => scrollTo("proj1")}> More... </T.Button>
                        </div>
                    </T.Box>
                    
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-4xl mt-3 mb-5">
                                Rojiku
                            </div>
                            <div className="text-2xl text-justify">
                                A software engineering project from NUS Orbital Programme. 
                            </div> 
                        </T.BoxContent>
                        <div className='flex flex-row items-start'>
                            <div className="flex grow self-start ml-5"> 
                                <T.Tag className="mt-0 text-xl min-w-16 self-start">SWE</T.Tag>
                                <T.Tag className="mt-0 text-xl min-w-16">Web Dev</T.Tag>
                            </div>
                            <T.Button className="inline-block" onClick={() => scrollTo("proj2")}> More... </T.Button>
                        </div>
                    </T.Box>
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-4xl mt-3 mb-5">
                                ACMC (Math Competition Web Platform)
                            </div>
                            <div className="text-2xl text-justify">
                                A website to hold the annual inter-class Mathematics Challenge (ACMC) for ACS(I). 
                            </div> 
                        </T.BoxContent>
                        <div className='flex flex-row items-start'>
                            <div className="flex grow self-start ml-5"> 
                                <T.Tag className="mt-0 text-xl min-w-16 self-start">SWE</T.Tag>
                                <T.Tag className="mt-0 text-xl min-w-16">Web Dev</T.Tag>
                            </div>
                            <T.Button className="inline-block" onClick={() => scrollTo("proj3")}> More... </T.Button>
                        </div>
                    </T.Box>
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-4xl mt-3 mb-5">
                                ML Classification Model for Musical Instrument Identification
                            </div>
                            <div className="text-2xl text-justify">
                                A classification model built with Python and TensorFlow to differentiate between audio recordings of two musical instruments
                            </div> 
                        </T.BoxContent>
                        <div className='flex flex-row items-start'>
                            <div className="flex grow self-start ml-5"> 
                                <T.Tag className="mt-0 text-xl min-w-16 self-start">AI / ML</T.Tag>
                            </div>
                            <T.Button className="inline-block" onClick={() => scrollTo("proj4")}> More... </T.Button>
                        </div>
                    </T.Box>
                </T.BoxContainer>
                </T.SectionContent>
            </T.Section>
            <T.Section id="proj1">
                <T.SectionHeader>
                    Portfolio Website
                </T.SectionHeader>
                <T.SectionContent>
                    <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <T.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <T.BulletPoint>stack1</T.BulletPoint>
                        <T.BulletPoint>stack2</T.BulletPoint>
                        <T.BulletPoint>stack3</T.BulletPoint>

                        <T.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-[300px] w-[500px] border-white border-2">Some large picture</div>
                    </div>
                </T.SectionContent>
            </T.Section>
            <T.Section id="proj2">
                <T.SectionHeader>
                    Rojiku
                </T.SectionHeader>
                <T.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <T.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <T.BulletPoint>stack1</T.BulletPoint>
                        <T.BulletPoint>stack2</T.BulletPoint>
                        <T.BulletPoint>stack3</T.BulletPoint>

                        <T.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-[300px] w-[500px] border-white border-2">Some large picture</div>
                    </div>
                </T.SectionContent>
            </T.Section>
            <T.Section id="proj3">
                <T.SectionHeader>
                    ACMC (Math Competition Web Platform)
                </T.SectionHeader>
                <T.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <T.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <T.BulletPoint>stack1</T.BulletPoint>
                        <T.BulletPoint>stack2</T.BulletPoint>
                        <T.BulletPoint>stack3</T.BulletPoint>

                        <T.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-[300px] w-[500px] border-white border-2">Some large picture</div>
                    </div>
                </T.SectionContent>
            </T.Section>
            <T.Section id="proj4">
                <T.SectionHeader>
                    ML Classification Model for Musical Instrument Identification
                </T.SectionHeader>
                <T.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <T.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <T.BulletPoint>stack1</T.BulletPoint>
                        <T.BulletPoint>stack2</T.BulletPoint>
                        <T.BulletPoint>stack3</T.BulletPoint>

                        <T.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-[300px] w-[500px] border-white border-2">Some large picture</div>
                    </div>
                </T.SectionContent>
            </T.Section>
        </>
        
    );
}

export default Projects;