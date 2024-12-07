import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Experience(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
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
                    <T.Timeline>
                        <T.Date>Present</T.Date>
                        <T.Entry> </T.Entry>
                        {/* TODO timeline does not work for this. create new sections. prob easiest to start*/}
                        <T.TimelineLine/>
                        <T.Entry> 
                            <T.Paragraph>
                                <div>National University of Singapore (NUS)</div>
                                <T.BulletPoint>
                                    Teaching Assistant 
                                </T.BulletPoint>
                                <T.BulletPoint>
                                Graded and provided feedback on student assignments and conducted weekly tutorial sessions for CS1101S  
                                </T.BulletPoint> 
                            </T.Paragraph>
                        </T.Entry>
                        <T.Date>2023</T.Date>
                        <T.Entry></T.Entry>
                        <T.TimelineLine/>
                        <T.Entry><T.Paragraph>
                                <div>Private Tuition</div>
                                <T.BulletPoint>
                                Taught several Junior College (JC) level students in the subjects of IBDP Physics and Chemistry
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    In Progress
                                </T.BulletPoint> 
                            </T.Paragraph></T.Entry>
                        <T.Date>2018</T.Date>
                    </T.Timeline>
                </T.SectionContent>
            </T.Section>
        </>
        
    );
}

export default Experience;