import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Contact(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    return (
        <>
            <T.Section>
                <T.Title>
                    Contact Me
                </T.Title>
                <T.SectionContent>
                    Email
                </T.SectionContent>
            </T.Section>
        </>
        
    );
}

export default Contact;