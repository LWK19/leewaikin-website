import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Projects(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Projects - Lee Wai Kin";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      
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
                            <div className="text-3xl mt-3 mb-5">
                                Portfolio Website
                            </div>
                            <div className="text-2xl">
                                My personal portfolio website that you are looking at right now. 
                            </div> 
                        </T.BoxContent>
                        <T.Button className="" > More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-3xl mt-3 mb-5">
                                Rojiku
                            </div>
                            <div className="text-2xl">
                                A software engineering project from NUS Orbital Programme. 
                            </div> 
                        </T.BoxContent>
                        <T.Button className="" > More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-3xl mt-3 mb-5">
                                ACMC (Math Competition Web Platform)
                            </div>
                            <div className="text-2xl">
                                A website to hold the annual inter-class Mathematics Challenge (ACMC) for ACS(I). 
                            </div> 
                        </T.BoxContent>
                        <T.Button className="" > More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col">
                    <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={"p1"} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> 
                            <div className="text-3xl mt-3 mb-5">
                                ML Classification Model for Musical Instrument Identification
                            </div>
                            <div className="text-2xl">
                                A classification model built with Python and TensorFlow to differentiate between audio recordings of two musical instruments
                            </div> 
                        </T.BoxContent>
                        <T.Button className="" > More... </T.Button>
                    </T.Box>
                </T.BoxContainer>
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    Portfolio Website
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    Rojiku
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    ACMC (Math Competition Web Platform)
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    ML Classification Model for Musical Instrument Identification
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
        </>
        
    );
}

export default Projects;