import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Experience(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Work Experience - Lee Wai Kin";
    return (
        <>
            <T.Section>
                <T.Title>
                    My Work Experience
                </T.Title>
                <T.SectionContent>
                    <T.BoxContainer>
                        <T.Card className="">
                            <T.CardImage className="">
                                image here
                            </T.CardImage>
                            <T.CardContent className="">
                                <T.CardHeader className="">
                                    <T.CardTitle className="">
                                        cybercemeteries
                                    </T.CardTitle>
                                    <T.CardDate className="">
                                        2024 - Present
                                    </T.CardDate>
                                </T.CardHeader>
                                <T.CardSubtitle className="">
                                    Software Engineer (Intern)
                                </T.CardSubtitle>
                                <div className="text-left">
                                    In Progress ...
                                </div>
                            </T.CardContent>
                        </T.Card>
                        <T.Card className="">
                            <T.CardImage className="">
                                image here
                            </T.CardImage>
                            <T.CardContent className="">
                                <T.CardHeader className="">
                                    <T.CardTitle className="">
                                        National University of Singapore
                                    </T.CardTitle>
                                    <T.CardDate className="">
                                        2024 - Present
                                    </T.CardDate>
                                </T.CardHeader>
                                <T.CardSubtitle className="">
                                    Student Researcher
                                </T.CardSubtitle>
                                <div className="text-left">
                                    Assisted in training of BERT architecture model on biotechnology datasets, particularly the DNABERT-2 model and Genome Understanding Evaluation (GUE) dataset.
                                    Analysed and conducted experiments on various model weight compressions on the model.
                                    Part of a larger research group on the implementation of a quantum transformer in the Centre for Quantum Technologies (CQT).
                                </div>
                            </T.CardContent>
                        </T.Card>
                        <T.Card className="">
                            <T.CardImage className="">
                                image here
                            </T.CardImage>
                            <T.CardContent className="">
                                <T.CardHeader className="">
                                    <T.CardTitle className="">
                                        National University of Singapore
                                    </T.CardTitle>
                                    <T.CardDate className="">
                                        2023 - Present
                                    </T.CardDate>
                                </T.CardHeader>
                                <T.CardSubtitle className="">
                                    Teaching Assistant
                                </T.CardSubtitle>
                                <div className="text-left">
                                    Graded and provided feedback on student assignments and conducted weekly tutorial sessions
                                </div>
                                <T.Collapsible className="m-0 " Header={<T.CollapsibleHeader>
                                    <div className="mt-2 text-2xl text-left">Modules Taught</div>
                                </T.CollapsibleHeader>} Content={<T.CollapsibleContent>
                                    <div className="pt-2 ml-3 text-xl text-left">
                                        CS1101S (AY24/25 Sem 1) <br />
                                        CS2030S (AY24/25 Sem 2) <br />
                                        CS2109S (AY24/25 Sem 2)
                                    </div>
                                </T.CollapsibleContent>} />
                            </T.CardContent>
                        </T.Card>
                        <T.Card className="">
                            <T.CardImage className="">
                                image here
                            </T.CardImage>
                            <T.CardContent className="">
                                <T.CardHeader className="">
                                    <T.CardTitle className="">
                                        Private Tuition
                                    </T.CardTitle>
                                    <T.CardDate className="">
                                        2023
                                    </T.CardDate>
                                </T.CardHeader>
                                <T.CardSubtitle className="">
                                    IBDP Physics and Chemistry Tutor
                                </T.CardSubtitle>
                                <div className="text-left">
                                    Taught several Junior College (JC) level students in the subjects of IBDP Physics and Chemistry
                                </div>
                            </T.CardContent>
                        </T.Card>
                        <T.Card className="">
                            <T.CardImage className="">
                                image here
                            </T.CardImage>
                            <T.CardContent className="">
                                <T.CardHeader className="">
                                    <T.CardTitle className="">
                                        Eye Level Tuition Centre
                                    </T.CardTitle>
                                    <T.CardDate className="">
                                        2018
                                    </T.CardDate>
                                </T.CardHeader>
                                <T.CardSubtitle className="">
                                    English Tutor
                                </T.CardSubtitle>
                                <div className="text-left">
                                    Taught English to classes of 6 – 12-year-olds in a tuition centre and graded students’ homework
                                </div>
                            </T.CardContent>
                        </T.Card>
                    </T.BoxContainer>
                </T.SectionContent>
            </T.Section>
        </>

    );
}

export default Experience;