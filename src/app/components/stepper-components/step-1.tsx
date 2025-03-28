
import { Label } from "@/components/ui/label";
import ProjectDescription from "./step-1components/project-description";
import ProjectEndDate from "./step-1components/project-enddate";
import ProjectName from "./step-1components/project-name";
import { Projectcategory } from "./step-1components/project-select";
import ProjectStartDate from "./step-1components/project-startdate";
import { Input } from "@/components/ui/input";

interface StepOneProps {
  purpose: string ;
  subtext: string ;
}

export default function Step1({purpose,subtext}:StepOneProps) {
  return (
    <div>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500 ">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8 min-w-6xl">
        <div className="mt-4">
            <ProjectName/>
            <ProjectDescription/>
            <Projectcategory/>
        </div>
        <div className="mt-4 space-y-7">
            <ProjectStartDate/>
            <ProjectEndDate/>
            <div className=",d-[64px]">
              <Label htmlFor="clientName" className="text-gray-700 mb-4"> Client name(optional)</Label>
              <Input id="clientName" className="h-[52px] mt-[5px]" placeholder="Enter client Name"/>
            </div>
        </div>
      </div>
    </div>
  )
}

