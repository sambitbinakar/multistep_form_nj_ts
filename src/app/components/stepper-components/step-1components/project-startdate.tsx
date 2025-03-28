"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Span } from "next/dist/trace";

import { useState } from "react";

export default function ProjectStartDate(){
    const [startDate, setstartDate] = useState<Date | undefined>(new Date())

    const isDateDisable=(date:Date) =>{
        const today = new Date()
        today.setHours(0,0,0,0);
        return date < today;
    }

    function handelSelectiondate(date:Date | undefined) {
        if(date){
            setstartDate(date)
        }
    }

    return (
        <div className="mb">
            <Label className="text-gray-600">Start Date</Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal h-12 mt-1 ">
                        <Calendar className="mr-2h-4 w-4"/>
                        {startDate ?(format(startDate,'ppp')):(<span>Pick a start date</span>)}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2 poppins">
                        <Calendar className="w-full" mode="single" selected={startDate} disabled={isDateDisable} onSelect={handelSelectiondate} initialFocus/>
                </PopoverContent>
            </Popover>
        </div>
    )
}