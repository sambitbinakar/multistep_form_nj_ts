
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { IconType } from "react-icons"
import { FaChartLine, FaCode, FaGraduationCap, FaHardHat, FaHeart } from "react-icons/fa";

type Category = | "Marketing" | "Software Develpment" | "Construction" | "Education" | "Healthcare"

type selectedItemType = {
    label: Category;
    icon: IconType;
}

export const selectedItems: selectedItemType[] =[
    {
        label:"Marketing",
        icon:FaChartLine
    },
    {
        label:"Software Develpment",
        icon:FaCode
    },
    {
        label:"Construction",
        icon:FaHardHat
    },
    {
        label:"Education",
        icon:FaGraduationCap
    },
    {
        label:"Healthcare",
        icon:FaHeart
    },
    
]

export function Projectcategory(){
    const [selectedcategory,setselectedcategory]=useState<Category>("Software Develpment")

    function onValueCahnge(value:string){
        const selectedItem =selectedItems.find((item)=>item.label === value)

        if(selectedItem){
            setselectedcategory(selectedItem.label);
        }
    }
    return (
        <div className="">
            <Label className="text-gray-700 mb-5">Project category</Label>
            <Select value={selectedcategory} onValueChange={onValueCahnge}>
                <SelectTrigger className="p-5">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    {selectedItems.map((item)=>(
                        <SelectItem key={item.label} value={item.label}>
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 size-6 rounded-md flex items-center justify-center">
                                <item.icon className="text-primary/45"/></div>

                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}