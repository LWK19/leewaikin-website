import '../main.css';
import React from 'react';
import * as T from '../template.tsx';
import p1 from "../assets/p1.jpg";
import nus from "../assets/nus.png";

function About(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

    function scrollTo(elementId: string) {
        document.getElementById(elementId)?.scrollIntoView();
    }
    return (
        <>
            <T.Section>
                <T.Title>
                    About Me
                </T.Title>
                <T.BoxContainer> 
                    <T.Box>
                        <T.BoxHeader className='h-1/2'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={p1} alt=""/> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> I am currently a Year 2 Computer Science student studying at NUS. </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("education")}> More... </T.Button>
                    </T.Box>
                    <T.Box>
                        <T.BoxTitle> Education </T.BoxTitle>
                        <T.BoxHeader className="h-1/3"> <img className="object-cover w-full h-full" src={nus} alt=""/> </T.BoxHeader>
                        <T.BoxContent> 
                            <div className="text-3xl mt-3 mb-5">
                                National University of Singapore (NUS) 
                            </div>
                            <div className="text-2xl">
                                Bachelor of Computing <br/> (Computer Science)
                            </div>
                        </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("education")}> More... </T.Button>
                    </T.Box>
                    <T.Box>
                        <T.BoxTitle> My Skills </T.BoxTitle>
                        <T.BoxContent> 
                            <T.Tag> Javascript / Typescript </T.Tag>
                            <T.Tag> ReactJS / Node.js </T.Tag>
                            <T.Tag> HTML / CSS </T.Tag>
                            <T.Tag> C / C++ </T.Tag>
                            <T.Tag> Python </T.Tag>
                            <T.Tag> Java </T.Tag>
                            <T.Tag> Webhosting </T.Tag>
                            <T.Tag> Database </T.Tag>
                            <T.Tag> TensorFlow / PyTorch </T.Tag>
                        </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("skills")}> More... </T.Button>
                    </T.Box>
                </T.BoxContainer>
            </T.Section>
            {/* TODO Tidy up this part. Create separate section below timeline to show modules taken + grades */}
            <T.Section id="education">
                <T.SectionHeader> Education </T.SectionHeader>
                <T.SectionContent>
                    <T.Timeline>
                        <T.Date>Present</T.Date>
                        <T.Entry> </T.Entry>
                        <T.TimelineLine/>
                        <T.Entry> 
                            <T.Paragraph>
                                <div>National University of Singapore (NUS)</div>
                                <T.BulletPoint>
                                    Bachelor of Computing (Honours), Computer Science <br/>
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    CGPA: 5.0 / 5.0 (As of AY23/24 Semester 2)
                                </T.BulletPoint>
                                <T.BulletPoint>
                                    Modules Taken: <br/>
                                    <u>Computer Science</u> <br/>
                                    CS1101S Programming Methodology <br/>
                                    CS1231S Discrete Structures <br/>
                                    CS2030S	Programming Methodology II <br/>
                                    CS2040S	Data Structures and Algorithms <br/>
                                    CS2100	Computer Organisation <br/>
                                    CS2109S	Introduction to AI and Machine Learning <br/>
                                    CS3230	Design and Analysis of Algorithms <br/>

                                    <br/>
                                    <u>Math</u> <br/>
                                    MA1521	Calculus for Computing <br/>
                                    MA1522	Linear Algebra for Computing <br/>
                                    ST2334	Probability and Statistics <br/>

                                    <br/>
                                    <u>Miscellaneous</u> <br/>
                                    IS1108	Digital Ethics and Data Privacy <br/>
                                    ES2660	Communicating in the Information Age <br/>
                                    GEC1015	Public Health in Action <br/>
                                    ST1131	Introduction to Statistics and Statistical Computing <br/>
                                    GESS1000	Global EC Dimensions of Singapore <br/>
                                    MUA1166	Introduction to Computing Media in Max <br/>
                                    CFA1101A	Performing Arts in Practice (Music) 1 <br/>
                                </T.BulletPoint>
                            </T.Paragraph>
                        </T.Entry>
                        <T.Date>2023</T.Date>
                        <T.Entry></T.Entry>
                        <T.TimelineLine/>
                        <T.Entry><T.Paragraph>
                                <div>Anglo-Chinese School (Independent)</div>
                                <T.BulletPoint>
                                    Diploma of the International Baccalaureate
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    Points: 43/45
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    Subject Combination: <br/>
                                    English A: Language and Literature (SL) <br/>
                                    Chinese B (SL) <br/>
                                    Economics (SL) <br/>
                                    Mathematics - AA (HL) <br/>
                                    Physics (HL) <br/>
                                    Chemistry (HL) <br/>
                                    Physics EE
                                    Theory of Knowledge
                                </T.BulletPoint> 
                            </T.Paragraph></T.Entry>
                        <T.Date>2017</T.Date>
                    </T.Timeline>
                </T.SectionContent>
            </T.Section>

            {/* TODO create skilltree? to show relation between each skill */}
            <T.Section id="skills">
                <T.SectionHeader> Skillset </T.SectionHeader>
                <T.SectionContent> In Progress </T.SectionContent>
            </T.Section>
        </>
    );
}

export default About;