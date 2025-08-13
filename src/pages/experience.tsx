import '../main.css';
import React from 'react';
import * as Utils from '../common/utils.tsx';
import * as Page from '../common/page.tsx';
import * as Box from '../common/box.tsx';
import JobCard from '../common/jobCard.tsx';
import rapsodo from "../assets/rapsodo.png";
import nus from "../assets/nus-logo.png";
import cybercemeteries from "../assets/cybercemeteries.jpeg";
import eyelevel from "../assets/eyelevel.png";
import lwk from "../assets/lwk.png";

function Experience(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Work Experience - Lee Wai Kin";
    return (<>
        <Page.Section>
            <Page.Title>
                My Work Experience
            </Page.Title>
            <Page.SectionContent>
                <Box.BoxContainer>
                    <JobCard Company="Rapsodo" Position="Software Engineer Intern" Date="2025" Image={rapsodo} 
                        Content={<div className="text-left">
                            Resolved several production-facing bugs related to networking and dependency issues. <br/>
                            <br/>
                            Contributed to the migration of product builds from ARMv7 to ARMv8 by adapting cross-compilation workflows and modifying existing CMake-based build configurations. Built and tested embedded packages across architectures to support stable product releases. <br/>
                            <br/>
                            Architected and maintained CI/CD infrastructure for multiple SDK repositories serving embedded systems development, utilizing Bitbucket Pipelines with self-hosted Docker runners across multiple environments (Ubuntu 20/22, ARM cross-compilation, Python/Node.js ecosystems). <br/>
                            <br/>
                            Automated end-to-end release workflows incorporating semantic versioning, SonarCloud static code analysis, cross-platform package building, and automated testing, eliminating manual release processes and improving developer efficiency. <br/>
                            <br/>
                            Optimized internal data validation tools by implementing a Dynamic Time Warping algorithm for time-series alignment, achieving a 25x performance improvement (5s → 0.2s) and significantly accelerating the data comparison process used in testing workflows.
                    </div>}/>
                    <JobCard Company="National University of Singapore" Position="Teaching Assistant" Date="2023 - Present" Image={nus} 
                        Content={<>
                            <div className="text-left">
                                Conducted weekly tutorial sessions, graded and provided feedback on student assignments. 
                            </div>
                            <Utils.Collapsible className="m-0 " 
                                Header={<div className="mt-2 text-2xl text-left">Modules Taught</div>} 
                                Content={<div className="pt-2 ml-3 text-2xl text-left">
                                    CS1101S (AY24/25 Sem 1) <br/>
                                    CS2030S (AY24/25 Sem 2) <br/>
                                    CS2109S (AY24/25 Sem 2) <br/>
                                    CS2109S (AY25/26 Sem 1) <br/>
                                    CS3230  (AY25/26 Sem 1)
                                </div>}
                            />
                    </>}/>
                    <JobCard Company="National University of Singapore" Position="Student Researcher" Date="2024 - 2025" Image={nus} 
                        Content={<div className="text-left">
                            Assisted in training of BERT architecture model on biotechnology datasets, particularly the DNABERT-2 model and Genome Understanding Evaluation (GUE) dataset. <br/>
                            Analysed and conducted experiments on various model weight compressions on the model. <br/>
                            Part of a larger research group on the implementation of a quantum transformer in the Centre for Quantum Technologies (CQT). <br/>
                    </div>}/>
                    <JobCard Company="cybercemeteries" Position="Software Engineer (Intern)" Date="2024 - 2025" Image={cybercemeteries} 
                        Content={<div className="text-left">
                            Developed a website for cybercemeteries, an e-commerce apparel business. <br/>
                            Built the platform with ReactJS + TypeScript and TailwindCSS. <br/>
                            Integrated the web app with Wix shop APIs, complete with membership, mailing list and payment functions. <br/>
                    </div>}/>
                    <JobCard Company="Private Tuition" Position="IBDP Physics and Chemistry Tutor" Date="2023" Image={lwk} 
                        Content={<div className="text-left">
                            Taught several Junior College (JC) level students in the subjects of IBDP Physics and Chemistry. 
                    </div>}/>
                    <JobCard Company="Eye Level Tuition Centre" Position="English Tutor" Date="2018" Image={eyelevel} 
                        Content={<div className="text-left">
                            Taught English to classes of 6 - 12-year-olds in a tuition centre and graded students' homework. 
                    </div>}/>  
                </Box.BoxContainer>
            </Page.SectionContent>
        </Page.Section>
    </>);
}

export default Experience;