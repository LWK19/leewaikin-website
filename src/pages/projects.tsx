import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Projects(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
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
                    {/* TODO change to same layout as experience, but have extra section detailing projects */}
                    <T.Timeline>
                        <T.Date>Present</T.Date>
                        <T.Entry> </T.Entry>
                        <T.TimelineLine/>
                        <T.Entry> 
                            <T.Paragraph>
                                <div>______</div>
                                <T.BulletPoint>
                                    In Progress 
                                </T.BulletPoint> 
                            </T.Paragraph>
                        </T.Entry>
                        <T.Date>####</T.Date>
                        <T.Entry></T.Entry>
                        <T.TimelineLine/>
                        <T.Entry><T.Paragraph>
                                <div>_____</div>
                                <T.BulletPoint>
                                    In Progress
                                </T.BulletPoint> 
                                <T.BulletPoint>
                                    In Progress
                                </T.BulletPoint> 
                            </T.Paragraph></T.Entry>
                        <T.Date>####</T.Date>
                    </T.Timeline>
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    Project #1
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
            <T.Section>
                <T.SectionHeader>
                    Project #2
                </T.SectionHeader>
                <T.SectionContent>
                    Project Description
                </T.SectionContent>
            </T.Section>
        </>
        
    );
}

export default Projects;