"use client"

import { Button } from "@/components/ui/button";
import Stepper from "./components/Stepper/stepper";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { steps } from "./components/stepper-data";

const BUTTON_LABLES ={
  BACK:"Back",
  NEXT:"Next Step",
  SUBMIT:"Launch Project",
}
export default function Home(){
const [currentStep, setcurrentStep] = useState(0)


const isfirstStep =currentStep === 0;
const islastStep = currentStep <steps.length -1;
  const handelNext=()=>{

    if(currentStep <steps.length){
      setcurrentStep(currentStep +1);
    }
  }
  const handleBack =()=>{

    if(currentStep >= 0){
      setcurrentStep (currentStep -1);
    }
  }
  return (
    <div className="">
      <Stepper steps={steps}  currentStep={currentStep}/>
      <div className="">{steps[currentStep].content}</div>
      <div className="flex items-center justify-end p-4 gap-4">
        <Button 
        disabled={isfirstStep}
        variant={"ghost"}
        className="p-6"
        onClick={handleBack}
        >
          <FaArrowLeft/>
          <span>{BUTTON_LABLES.BACK}</span>
        </Button>
        {islastStep ?(
          <Button className="p-6" onClick={handelNext}>{BUTTON_LABLES.NEXT}</Button>
        ):(
          <Button className="p-6" onClick={()=> alert("Form submitted!")}>{BUTTON_LABLES.SUBMIT}</Button>
        )}
      </div>
    </div>
  );
}
