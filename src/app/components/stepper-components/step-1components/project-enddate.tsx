import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";


function getNextDate(){
    const today = new Date();
    const nextDay = new Date(today)

    nextDay.setDate(today.getDate()+1)
    nextDay.setHours(0,0,0,0)

    return nextDay
}

export default function ProjectEndDate(){
    const [startdate,setStartdate]= useState< Date| undefined>(getNextDate())

    const isDateDisable =(date:Date)=>{
        const nextday = getNextDate()
        return date < nextday
    }

    function handelSelectiondate(date:Date | undefined) {
        if(date){
            setStartdate(date)
        }
    }

    return (
        <div className="">
            <Label className="text-gray-600 mb-4">Target Date</Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal h-12 mt-1 ">
                        <CalendarIcon className="mr-2 h-4 w-4"/>
                        {startdate ?(format(startdate,'ppp')):(<span>Pick a Target date</span>)}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2 poppins">
                        <Calendar className="w-full" mode="single" selected={startdate} disabled={isDateDisable} onSelect={handelSelectiondate} initialFocus/>
                </PopoverContent>
            </Popover>
        </div>
    )
}