import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function About(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <T.Content>
            <T.Title>
                About Me
            </T.Title>
            <T.BoxContainer> 
                <T.Box>
                    <T.BoxTitle> Who am I? </T.BoxTitle>
                    <T.BoxContent> In Progress </T.BoxContent>
                </T.Box>
                <T.Box>
                    <T.BoxTitle> Education </T.BoxTitle>
                    <T.BoxContent> In Progress </T.BoxContent>
                </T.Box>
                <T.Box>
                    <T.BoxTitle> Skillset </T.BoxTitle>
                    <T.BoxContent> In Progress </T.BoxContent>
                </T.Box>
            </T.BoxContainer>
        </T.Content>
        
    );
}

export default About;