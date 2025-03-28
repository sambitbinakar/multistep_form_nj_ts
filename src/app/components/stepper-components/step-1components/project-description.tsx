import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MdError } from "react-icons/md";


export default function ProjectDescription(){
    const [description, setdescription] = useState("")
    const maxlength =  135;

    return(
        <div className="mb-5 mt-4">
            <Label htmlFor="projectdesc" className="text-gray-600 mb-3">Project description</Label>
            <Textarea value={description} id="projectdesc" placeholder="Enter a description for the project " onChange={(e)=>setdescription(e.target.value)}/>
            <div className="flex justify-between mt-1">
                <div className="text-red-500 text-sm flex items-center gap-2">
                    {/* <MdError />
                    <span>Error</span> */}
                </div>
                <div className="text-sm text-gray-500 mt-2">{description.length}/{maxlength}Characters</div>
            </div>
        </div>
    )
}