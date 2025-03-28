interface StepOneProps {
  purpose: string ;
  subtext: string ;
}

export default function Step2({purpose,subtext}:StepOneProps) {
  return (
    <div>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500 ">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8"></div>
    </div>
  )
}

