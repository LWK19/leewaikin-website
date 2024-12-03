import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Projects(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <T.Content>
            <div className="pt-4 w-full text-5xl">
                Projects
            </div>
            <div className="p-4"> 
                In Progress
            </div>
        </T.Content>
        
    );
}

export default Projects;