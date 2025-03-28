import ProjectDescription from "./step-1components/project-description";
import ProjectName from "./step-1components/project-name";
import { Projectcategory } from "./step-1components/project-select";

interface StepOneProps {
  purpose: string ;
  subtext: string ;
}

export default function Step1({purpose,subtext}:StepOneProps) {
  return (
    <div>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500 ">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <div className="mt-4">
            <ProjectName/>
            <ProjectDescription/>
            <Projectcategory/>
        </div>
        <div className="mt-4">

        </div>
      </div>
    </div>
  )
}

