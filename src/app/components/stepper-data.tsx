import { FaProjectDiagram } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { LuMilestone } from "react-icons/lu";
import { RiSpaceShipFill, RiTeamFill } from "react-icons/ri";

// import {Step} from "./Stepper/stepper";
import Step1 from "./stepper-components/step-1";
import Step2 from "./stepper-components/step-2";
import Step3 from "./stepper-components/step-3";
import Step4 from "./stepper-components/step-4";
import Step5 from "./stepper-components/step-5";


export const stepData ={
    step1: {
        purpose: "Define the basic details of the project",
        subtext:"Provide a clear and concise overview of your project to help your team understand its scope and objective"
    },
    step2: {
        purpose: "Asssign team members and define their roles",
        subtext:"Add team member and asign roles to ensure everyone know their responsibilities. You can also invite external ...."
    },
    step3: {
        purpose: "Break down the project into tasks and milestone",
        subtext:"Create a detailed task list with deadliness and priorities to keep your project on track. Add milestone to mark key ...."
    },
    step4: {
        purpose: "Plan the project's finacial and resource allocation",
        subtext:"Outline your budget and allocate resource effectively to avoid overspending and ensure smooth project execution."
    },
    step5: {
        purpose: "Finalize4 and launch the project",
        subtext:"Review all the details you've entered to esure everythings.once confirmed, launch your project and get...."
    },
   
}


export const steps:any =[
    {
        purpose: stepData.step1.purpose,
        subText: stepData.step1.subtext,
        icon:FaProjectDiagram,
        label:"Project Overview",
        content:(
        <Step1 purpose={stepData.step1.purpose} subtext={stepData.step1.subtext}/>
    )
    },
    {
        purpose: stepData.step2.purpose,
        subText: stepData.step2.subtext,
        icon:RiTeamFill,
        label:"Team & Role",
        content:<Step2 purpose={stepData.step2.purpose} subtext={stepData.step2.subtext}/>
    },
    {
        purpose: stepData.step3.purpose,
        subText: stepData.step3.subtext,
        icon:LuMilestone,
        label:"Takes & milestones",
        content:<Step3 purpose={stepData.step3.purpose} subtext={stepData.step3.subtext}/>
    },
    {
        purpose: stepData.step4.purpose,
        subText: stepData.step4.subtext,
        icon:FaMoneyBill1Wave,
        label:"Budget & Resources",
        content:<Step4 purpose={stepData.step4.purpose} subtext={stepData.step4.subtext}/>
    },
    {
        purpose: stepData.step5.purpose,
        subText: stepData.step5.subtext,
        icon:RiSpaceShipFill,
        label:"Review & Launch",
        content:<Step5 purpose={stepData.step5.purpose} subtext={stepData.step5.subtext}/>
    },
]