"use client"
import React from 'react'
import { IconType } from 'react-icons'


export type Step = {
    icon: IconType;
    label: string;
    content: React.ReactNode;
}
function Stepper({steps,currentStep}: {steps: Step[];currentStep:number}) {
  return (
    <div className='flex items-center justify-center p-2'>
        <div className="border rounded-lg flex justify-center items-center p-2">
            {steps.map((step,index)=>(
                <div className="flex items-center p-3 gap-2" key={index}>
                 <StepIndicator Icon={step.icon} isactive ={currentStep === index} />

                 {currentStep === index && (
                    <StepLabel label={step.label} stepNumber={index + 1 }/>
                 )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Stepper;

function StepLabel({label,stepNumber}: {label:string; stepNumber:number}){
    return (
        <div className="flex flex-col">
            <span className='text-[13px] font-medium text-primary'>STEP {stepNumber}</span>
            <span className='font-bold'>{label}</span>
        </div>
    )
}
function StepIndicator({ Icon,isactive}:{Icon:IconType; isactive:boolean}){
    return(
        <div className={`p-3 rounded-full ${isactive ? "bg-primary/10 ": "bg-gray-100"}`}>
            <Icon className={`${isactive ? "text-primary":"text-gray-400"}`}/>
        </div>
    )
}