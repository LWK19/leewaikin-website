import '../main.css';
import React from 'react';
import * as T from '../template.tsx';
import p1 from "../assets/p1.jpg";
import nus from "../assets/nus.png";

function About(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    function scrollTo() {
        console.log("pressed");
        return undefined;
    }
    return (
        <T.Content>
            <T.Section>
                <T.Title>
                    About Me
                </T.Title>
                <T.BoxContainer> 
                    <T.Box>
                        <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={p1} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> I am currently a Year 2 Computer Science student studying at NUS. </T.BoxContent>
                        <T.Button className="" onClick={scrollTo}> More... </T.Button>
                    </T.Box>
                    <T.Box>
                        <T.BoxTitle> Education </T.BoxTitle>
                        <T.BoxHeader className="h-1/3"> <img className="object-cover w-full h-full" src={nus} alt=""/> </T.BoxHeader>
                        <T.BoxContent> 
                            <div className="text-3xl mt-3 mb-5">
                                National University of Singapore (NUS) 
                            </div>
                            <div className="text-2xl">
                                Bachelor's in Computing <br/> (Computer Science)
                            </div>
                        </T.BoxContent>
                        <T.Button className="" onClick={scrollTo}> More... </T.Button>
                    </T.Box>
                    <T.Box>
                        <T.BoxTitle> My Skills </T.BoxTitle>
                        <T.BoxContent> 
                            <T.Tag> Javascript </T.Tag>
                            <T.Tag> ReactJS / Node.js </T.Tag>
                            <T.Tag> HTML / CSS </T.Tag>
                            <T.Tag> C / C++ </T.Tag>
                            <T.Tag> Python </T.Tag>
                        </T.BoxContent>
                        <T.Button className="" onClick={scrollTo}> More... </T.Button>
                    </T.Box>
                </T.BoxContainer>
            </T.Section>
            <T.Section>
                <T.SectionHeader> Education </T.SectionHeader>
                <T.SectionContent>
                    <T.Timeline>
                        <T.Date>Present</T.Date>
                        <T.Entry> </T.Entry>
                        <T.TimelineLine/>
                        <T.Entry> 
                            <T.Paragraph>
                                <div>NUS</div>
                                <T.BulletPoint>
                                    blah blah blah <br/>
                                    blah blah blah 
                                </T.BulletPoint> 
                            </T.Paragraph>
                        </T.Entry>
                        <T.Date>2023</T.Date>
                        <T.Entry></T.Entry>
                        <T.TimelineLine/>
                        <T.Entry><T.Paragraph>
                                <div>ACS(I)</div>
                                <T.BulletPoint>
                                    blah blah blah blah blah blah blah blah blah<br/>
                                    blah blah blah <br/>
                                    blah blah blah <br/>
                                    blah blah blah 
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    blah blah blah <br/>
                                    blah blah blah 
                                </T.BulletPoint> 
                            </T.Paragraph></T.Entry>
                        <T.Date>2017</T.Date>
                    </T.Timeline>
                </T.SectionContent>
            </T.Section>

            <T.Section>
                <T.SectionHeader> Skillset </T.SectionHeader>
                <T.SectionContent> In Progress </T.SectionContent>
            </T.Section>
        </T.Content>
    );
}

export default About;