import '../main.css';
import React from 'react';
import * as Box from '../common/box.tsx';
import * as Utils from '../common/utils.tsx';
import * as Page from '../common/page.tsx';
import Timeline from '../common/timeline.tsx';
import ModuleGradeList from '../common/modules.tsx';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import nus from "../assets/nus.png";

//TODO: Add links 
//TODO: Add CS3263 project

function About(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "About - Lee Wai Kin";

    function scrollTo(elementId: string) {
        document.documentElement.style.scrollBehavior = "smooth";
        document.getElementById(elementId)?.scrollIntoView();
        document.documentElement.style.scrollBehavior = "";
    }
    return (
        <>
            <Page.Section>
                <Page.Title>
                    About Me
                </Page.Title>
                <Box.BoxContainer>
                    <Box.Box className="flex-col">
                        <Box.BoxHeader className='h-[250px]'> <img className="rounded-t-4xl object-cover object-center w-full h-full object-[0_-15px]" src={p1} alt="" /> </Box.BoxHeader>
                        <Box.BoxContent className="mt-5"> I am currently a Year 3 NUS Computer Science student. </Box.BoxContent>
                        <Utils.Button className="" onClick={() => scrollTo("whoami")}> More... </Utils.Button>
                    </Box.Box>
                    <Box.Box className="flex-col">
                        <Box.BoxTitle> Education </Box.BoxTitle>
                        <Box.BoxHeader className="h-[150px]"> <img className="object-cover w-full h-full" src={nus} alt="" /> </Box.BoxHeader>
                        <Box.BoxContent>
                            <div className="text-3xl mt-3 mb-5">
                                National University of Singapore (NUS)
                            </div>
                            <div className="text-2xl">
                                Bachelor of Computing <br /> (Computer Science)
                            </div>
                        </Box.BoxContent>
                        <Utils.Button className="" onClick={() => scrollTo("education")}> More... </Utils.Button>
                    </Box.Box>
                    <Box.Box className="flex-col min-h-10">
                        <Box.BoxTitle> Key Achievements </Box.BoxTitle>
                        <Box.BoxContent>
                            <ul className="list-disc mx-10 text-left flex flex-col gap-5">
                                <li>ASEAN Undergraduate Merit Scholarship</li>
                                <li>NUS Dean's List</li>
                            </ul>
                        </Box.BoxContent>
                        <Utils.Button className="" onClick={() => scrollTo("achievements")}> More... </Utils.Button>
                    </Box.Box>
                    <Box.Box className="flex-col min-h-10">
                        <Box.BoxTitle> My Skills </Box.BoxTitle>
                        <Box.BoxContent>
                            {[
                                "C / C++", 
                                "CMake / GNU Make", 
                                "Python", 
                                "Java", 
                                "Javascript / Typescript", 
                                "ReactJS / Node.js", 
                                "HTML / CSS", 
                                "Linux / Unix / Shell", 
                                "Webhosting", 
                                "Database", 
                                "TensorFlow / PyTorch",
                                "Data Analytics"
                            ].map((skill, index) => (<Utils.Tag key={index}>{skill}</Utils.Tag>))}
                        </Box.BoxContent>
                    </Box.Box>
                </Box.BoxContainer>
            </Page.Section>
            <Page.Section id="whoami">
                <Page.SectionHeader> Who am I?</Page.SectionHeader>
                <Page.SectionContent className="">
                    <div className="flex flex-row w-3/4 lg:w-3/4">
                        <div className="lg:w-3/4 text-xl lg:text-2xl lg:text-justify">
                            <img className="object-contain w-full object-top lg:hidden" src={p2} alt=""/>
                            <div className="text-4xl lg:text-5xl pt-5 text-center lg:hidden">Lee Wai Kin</div>
                            <div className="p-5 flex flex-row justify-center items-center gap-5 lg:hidden"> 
                                <a href="https://linkedin.com/in/leewaikin" target="_blank" rel="noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" width="30" height="30"/>
                                </a>
                                <a href="https://github.com/leewaikin19" target="_blank" rel="noreferrer">
                                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="invert" alt="GitHub" width="30" height="30"/>
                                </a>
                                <a href="contact">
                                    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="invert" alt="Email" width="30" height="30"/>
                                </a>
                            </div>
                            I am currently a Year 3 student at the National University of Singapore (NUS), pursuing a Bachelor of Computing (Honours) in Computer Science. My specialisations include Artificial Intelligence, Algorithms and Software Engineering.
                            <div className="h-3" />
                            Having achieved 3 Dean's List awards consecutively, I possess strong academic abilities which are not only grounded in theoretical understanding, but also real-world problem solving skills. 
                            <div className="h-3" />
                            Within NUS, I am currently contracted as a part-time Teaching Assistant for several CS coded modules, and was a Student Researcher working on AI models.
                            <div className="h-3" />
                            My skills span fullstack development, software engineering, artificial intelligence, and many others.
                            <div className="h-3" />
                            In my free time, I enjoy listening to music and dabble in music production.
                        </div>
                        <div className='w-1/4 pl-5 hidden lg:block'>
                            <img className="object-contain w-full object-top hidden lg:block" src={p2} alt=""/>
                            <div className="text-5xl pt-5 hidden lg:block">Lee Wai Kin</div>
                            <div className="p-5 flex-row justify-center items-center gap-5  hidden lg:flex"> 
                                <a href="https://linkedin.com/in/leewaikin" target="_blank" rel="noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" width="40" height="40"/>
                                </a>
                                <a href="https://github.com/leewaikin19" target="_blank" rel="noreferrer">
                                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="invert" alt="GitHub" width="40" height="40"/>
                                </a>
                                <a href="contact">
                                    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="invert" alt="Email" width="40" height="40"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </Page.SectionContent>
            </Page.Section>
            <Page.Section id="education">
                <Page.SectionHeader> Education </Page.SectionHeader>
                <Page.SectionContent>
                    <Timeline Times={["Present", "2023", "2017"]} Content={[
                        <Page.Paragraph>
                            <div className='text-left lg:text-center'>National University of Singapore (NUS)</div>
                            <Page.BulletPoint>
                                Bachelor of Computing (Honours), Computer Science
                            </Page.BulletPoint>
                            <Page.BulletPoint>
                                CGPA: 4.93 / 5.00 (<i>as of AY25/26 Semester 1</i>)
                            </Page.BulletPoint>
                        </Page.Paragraph>, 
                        <Page.Paragraph>
                            <div className='text-left lg:text-center'>Anglo-Chinese School (Independent)</div>
                            <Page.BulletPoint>
                                Diploma of the International Baccalaureate
                            </Page.BulletPoint>
                            <Page.BulletPoint>
                                Points: 43/45
                            </Page.BulletPoint>
                        </Page.Paragraph>
                    ]}/>

                    <Page.ContentDivider />

                    <div className='w-3/4 lg:w-1/2'>
                        <div className="text-2xl lg:text-3xl mt-10 text-left"> National University of Singapore</div>
                        <div className='text-left text-xl lg:text-2xl'> CGPA: 4.9 / 5.0 (As of AY25/26 Semester 1)</div>

                        <Utils.Collapsible className=" m-0" 
                            Header={<div className="text-xl lg:text-2xl">Modules Taken</div>} 
                            Content={<ModuleGradeList 
                                CSModules={[
                                    ["CS1101S", "Programming Methodology", "A+"],
                                    ["CS1231S", "Discrete Structures", "A+"],
                                    ["CS2030S", "Programming Methodology II", "A"],
                                    ["CS2040S", "Data Structures and Algorithms", "A"],
                                    ["CS2100", "Computer Organisation", "A"],
                                    ["CS2101", "Effective Communication for Computing Professionals", "S"],
                                    ["CS2103T", "Software Engineering", "A-"],
                                    ["CS2106", "Introduction to Operating Systems", "A"],
                                    ["CS2109S", "Introduction to AI and Machine Learning", "A"],
                                    ["CS3230", "Design and Analysis of Algorithms", "A"],
                                    ["CS3231", "Theory of Computation", "A"],
                                    ["CS3263", "Foundations of Artificial Intelligence", "A"],
                                    ["CS4211", "Formal Methods of Software Engineering", "A"],
                                    ["CS4234", "Optimisation Algorithms", "A-"],
                                    ["CS4246", "AI Planning and Decision Making", "A"]
                                    ]}
                                MathModules={[
                                    ["MA1521", "Calculus for Computing", "S"],
                                    ["MA1522", "Linear Algebra for Computing", "A"],
                                    ["ST1131", "Introduction to Statistics and Statistical Computing", "S"],
                                    ["ST2334", "Probability and Statistics", "A"]
                                ]}
                                MiscModules={[
                                    ["CFA1101A", "Performing Arts in Practice (Music) 1", "S"],
                                    ["CLC2204", "Community Development with Youth", "S"],
                                    ["ES2660", "Communicating in the Information Age", "S"],
                                    ["GEC1015", "Public Health in Action", "A"],
                                    ["GESS1000", "Global EC Dimensions of Singapore", "S"],
                                    ["HSI1000", "How Science Works, Why Science Works", "A"],
                                    ["IS1108", "Digital Ethics and Data Privacy", "A"],
                                    ["IS2218", "Digital Platforms for Business", "S"],
                                    ["LAJ2203", "Japanese 3", "A-"],
                                    ["MUA1166", "Introduction to Computing Media in Max", "A"],
                                    
                                ]}
                            />}
                        />
                    </div>

                    <Page.ContentDivider />

                    <div className='w-3/4 lg:w-1/2'>
                        <div className="text-2xl lg:text-3xl mt-10 text-left"> Anglo-Chinese School (Independent)</div>
                        <div className='text-left text-xl lg:text-2xl'> Points: 43/45 </div>
                        <Utils.Collapsible className=" m-0" 
                            Header={<div className="text-xl lg:text-2xl">Subject Combination</div>} 
                            Content={<div className="grid grid-cols-5 justify-self-center text-xs md:text-lg lg:text-2xl">
                                <div className="col-span-4 text-center">Subject</div>
                                <div className="col-span-1">Grade</div>
                                <div className="col-span-4 text-left">English A: Language and Literature (SL)
                                </div>
                                <div className="col-span-1">6</div>
                                <div className="col-span-4 text-left">Chinese B (SL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Economics (SL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Mathematics - AA (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Physics (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Chemistry (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Physics EE
                                </div>
                                <div className="col-span-1">B</div>
                                <div className="col-span-4 text-left">Theory of Knowledge</div>
                                <div className="col-span-1">B</div>
                            </div>}
                        />
                    </div>
                </Page.SectionContent>
            </Page.Section>
            <Page.Section id="achievements">
                <Page.SectionHeader> Key Achievements </Page.SectionHeader>
                <Page.SectionContent>
                    <Utils.Collapsible
                        Header={<Utils.CustomLink className="text-2xl lg:text-3xl" 
                            href="https://nus.edu.sg/oam/scholarships/scholarships-for-freshmen-singapore-permanent-residents/asean-undergraduate-scholarship" target="_blank">
                            ASEAN Undergraduate Merit Scholarship
                        </Utils.CustomLink>}
                        Content={<div className="px-5 pt-5 h-auto text-left text-xl lg:text-2xl" >
                            Recipient of the ASEAN Undergraduate Merit Scholarship from 2023-2027.
                        </div>} />
                    <Utils.Collapsible
                        Header={<Utils.CustomLink className="text-2xl lg:text-3xl" 
                            href="https://credentials.nus.edu.sg/fd63e521-1866-46dd-b83d-a384e834a703#acc.hwFQzG1D" target="_blank">
                            NUS Dean's List (AY24/25 Semester 2)
                        </Utils.CustomLink>}
                        Content={<div className="p-10">
                            <a href="https://credentials.nus.edu.sg/fd63e521-1866-46dd-b83d-a384e834a703#acc.hwFQzG1D" target="_blank" rel="noreferrer">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/148562144" alt=""/>
                            </a>
                        </div>} />
                    <Utils.Collapsible
                        Header={<Utils.CustomLink className="text-2xl lg:text-3xl" 
                            href="https://credentials.nus.edu.sg/1a660a26-f305-4f01-956a-c95a71ac230a#acc.kzMparqy" target="_blank">
                            NUS Dean's List (AY24/25 Semester 1)
                        </Utils.CustomLink>}
                        Content={<div className="p-10">
                            <a href="https://credentials.nus.edu.sg/1a660a26-f305-4f01-956a-c95a71ac230a#acc.kzMparqy" target="_blank" rel="noreferrer">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/129042888" alt="" />
                            </a>
                        </div>} />
                    <Utils.Collapsible
                        Header={<Utils.CustomLink className="text-2xl lg:text-3xl" 
                            href="https://credentials.nus.edu.sg/f5dc0f96-4a70-49f0-bbba-6142b765947a#acc.V5SX1WA4" target="_blank">
                            NUS Dean's List (AY23/24 Semester 2)
                        </Utils.CustomLink>}
                        Content={<div className="p-10">
                            <a href="https://credentials.nus.edu.sg/f5dc0f96-4a70-49f0-bbba-6142b765947a#acc.V5SX1WA4" target="_blank" rel="noreferrer">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/105927835" alt="" />
                            </a>
                        </div>} />
                    <Utils.Collapsible
                        Header={<Utils.CustomLink className="text-2xl lg:text-3xl" 
                            href="https://credentials.nus.edu.sg/5fa85c35-10bb-421a-9235-e5f721abdc1d#acc.5xqQuTyF" target="_blank">
                            NUS Honour List of Student Tutors (AY24/25)
                        </Utils.CustomLink>}
                        Content={<div className="p-10">
                            <a href="https://credentials.nus.edu.sg/5fa85c35-10bb-421a-9235-e5f721abdc1d#acc.5xqQuTyF" target="_blank" rel="noreferrer">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/168916072" alt=""/>
                            </a>
                        </div>} />
                </Page.SectionContent>
            </Page.Section>
        </>
    );
}

export default About;
