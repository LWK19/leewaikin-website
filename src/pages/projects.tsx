import '../main.css';
import React from 'react';
import * as Page from '../common/page.tsx';
import * as Box from '../common/box.tsx';
import ProjectBox from '../common/projectBox.tsx';
import lwk from '../assets/lwk.png';
import rojiku from '../assets/rojiku.png';
//import rojikuSnapshot from '../assets/rojiku-snapshot.png';
import acmc from '../assets/acmc.png';
//import acmcSnapshot from '../assets/acmc-snapshot.png';
import tensorflow from '../assets/tensorflow.png';

function Projects(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Projects - Lee Wai Kin";
    function scrollTo(elementId: string) {
        document.documentElement.style.scrollBehavior = "smooth";
        document.getElementById(elementId)?.scrollIntoView();
        document.documentElement.style.scrollBehavior = "";
    }
    return (
        <>
            <Page.Section>
                <Page.Title>
                    My Projects
                </Page.Title>
                <Page.SectionContent>
                    <Box.BoxContainer> 
                        <ProjectBox Title="Portfolio Website" Description="My personal portfolio website that you are looking at right now." 
                            Image={lwk} Link={() => scrollTo("proj1")} Tags={["SWE","Web Dev"]}
                        />

                        <ProjectBox Title="Rojiku" Description="A software engineering project from NUS Orbital Programme." 
                            Image={rojiku} Link={() => scrollTo("proj2")} Tags={["SWE","Web Dev"]}
                        />

                        <ProjectBox Title="ACMC (Math Competition Web Platform)" Description="A website to hold the annual inter-class Mathematics Challenge (ACMC) for ACS(I)." 
                            Image={acmc} Link={() => scrollTo("proj3")} Tags={["SWE","Web Dev"]}
                        />
                        
                        <ProjectBox Title="ML Classification Model for Musical Instrument Identification" Description="A classification model built with Python and TensorFlow to differentiate between audio recordings of two musical instruments." 
                            Image={tensorflow} Link={() => scrollTo("proj4")} Tags={["AI/ML"]}
                        />
                    </Box.BoxContainer>
                </Page.SectionContent>
            </Page.Section>

            { /* Legacy sections for project details
            <Page.Section id="proj1">
                <Page.SectionHeader>
                    Portfolio Website
                </Page.SectionHeader>
                <Page.SectionContent>
                    <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <Page.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <Page.BulletPoint>stack1</Page.BulletPoint>
                        <Page.BulletPoint>stack2</Page.BulletPoint>
                        <Page.BulletPoint>stack3</Page.BulletPoint>

                    </div>
                </Page.SectionContent>
            </Page.Section>
            <Page.Section id="proj2">
                <Page.SectionHeader>
                    Rojiku
                </Page.SectionHeader>
                <Page.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <Page.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <Page.BulletPoint>stack1</Page.BulletPoint>
                        <Page.BulletPoint>stack2</Page.BulletPoint>
                        <Page.BulletPoint>stack3</Page.BulletPoint>

                        <Page.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-1/2 w-1/2 border-white border-2">
                            <img className="w-full h-full object-contain" src={rojikuSnapshot} alt="Rojiku Snapshot"/>
                        </div>
                    </div>
                </Page.SectionContent>
            </Page.Section>
            <Page.Section id="proj3">
                <Page.SectionHeader>
                    ACMC (Math Competition Web Platform)
                </Page.SectionHeader>
                <Page.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <Page.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <Page.BulletPoint>stack1</Page.BulletPoint>
                        <Page.BulletPoint>stack2</Page.BulletPoint>
                        <Page.BulletPoint>stack3</Page.BulletPoint>

                        <Page.ContentDivider className="my-5 self-center"/>
                        <div className="text-2xl">Snapshot</div>
                        <div className="h-1/2 w-1/2 border-white border-2">
                            <img className="w-full h-full object-contain" src={acmcSnapshot} alt="ACMC Snapshot"/>
                        </div>
                    </div>
                </Page.SectionContent>
            </Page.Section>
            <Page.Section id="proj4">
                <Page.SectionHeader>
                    ML Classification Model for Musical Instrument Identification
                </Page.SectionHeader>
                <Page.SectionContent>
                <div className="w-3/4 flex flex-col items-center text-justify">
                        This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. This is a lengthy project description. <br/> <br/>

                        This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. This lengthy project description can have multiple paragraphs. 

                        <Page.ContentDivider className="my-5 self-center"/>

                        <div className="text-2xl">Tech Stack / Skills Used</div>
                        <Page.BulletPoint>stack1</Page.BulletPoint>
                        <Page.BulletPoint>stack2</Page.BulletPoint>
                        <Page.BulletPoint>stack3</Page.BulletPoint>
                    </div>
                </Page.SectionContent>
            </Page.Section>
             */ }
        </>
        
    );
}

export default Projects;