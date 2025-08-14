import React from 'react';

type ModuleGradeListProps = {CSModules:string[][], MathModules:string[][], MiscModules:string[][]} & React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>
export default function ModuleGradeList(props:ModuleGradeListProps){
    return (
        <div className="grid grid-cols-6 justify-self-center">
            <div className="col-span-5 mb-2 text-center">Module</div>
            <div className="col-span-1">Grade</div>

            <u className="col-span-6">Computer Science</u>
            {props.CSModules.map((module, index) => (<React.Fragment key={index}>
                <div className="col-span-1 text-left">{module[0]}</div>
                <div className="col-span-4 text-left">{module[1]}</div>
                <div className="col-span-1">{module[2]}</div>
            </React.Fragment>))}

            <div className='col-span-6 p-2' />

            <u className="col-span-6 ">Math</u>
            {props.MathModules.map((module, index) => (<React.Fragment key={index}>
                <div className="col-span-1 text-left">{module[0]}</div>
                <div className="col-span-4 text-left">{module[1]}</div>
                <div className="col-span-1">{module[2]}</div>
            </React.Fragment>))}

            <div className='col-span-6 p-2' />
            
            <u className="col-span-6">Miscellaneous</u>
            {props.MiscModules.map((module, index) => (<React.Fragment key={index}>
                <div className="col-span-1 text-left">{module[0]}</div>
                <div className="col-span-4 text-left">{module[1]}</div>
                <div className="col-span-1">{module[2]}</div>
            </React.Fragment>))}
            <br />
        </div>
    )
}