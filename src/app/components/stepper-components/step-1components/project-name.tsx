import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";



export default function ProjectName(){
    return (
        <div className="mb-5">
            <Label htmlFor="projectname" className="text-gray-700 mb-4">Project Name</Label>
            <Input id="projectname" className="h-12 mt-1" placeholder="Enter Project name"/>
            {/* <div className="text-red-500 text-sm mt-1 flex items-center gap-2 ">
                <MdError/>
                <span>error</span>
            </div> */}
        </div>
    )
}