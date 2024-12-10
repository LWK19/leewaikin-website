import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Experience(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Work Experience - Lee Wai Kin";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
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
                                    TBC  
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
                                    Graded and provided feedback on student assignments and conducted weekly tutorial sessions for CS1101S  
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