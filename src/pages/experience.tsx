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
        </>
        
    );
}

export default Experience;