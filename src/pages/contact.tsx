import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Contact(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <T.Content>
            <T.Section>
                <T.Title>
                    Contact Me
                </T.Title>
                <T.SectionContent>
                    Email
                </T.SectionContent>
            </T.Section>
        </T.Content>
        
    );
}

export default Contact;