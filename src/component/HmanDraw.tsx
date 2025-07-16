const Head = (
  <div className="w-[50px] aspect-square rounded-full border-[3px] border-white/50"></div>
)
const Body = (
  <div className="w-[3px] h-[80px] bg-white/50 absolute top-[50px] left-[25px]"></div>
)
const Arm_Left = (
  <div className="w-[3px] h-[40px] bg-white/50 absolute top-[60px] left-[10px] rotate-[30deg]"></div>
)
const Arm_Right = (
  <div className="w-[3px] h-[40px] bg-white/50 absolute top-[60px] right-[6px] rotate-[-30deg]"></div>
)
const Leg_Left = (
  <div className="w-[3px] h-[50px] bg-white/50 absolute top-[125px] left-[12px] rotate-[30deg]"></div>
)
const Leg_Right = (
  <div className="w-[3px] h-[50px] bg-white/50 absolute top-[125px] right-[8px] rotate-[-30deg]"></div>
)
const MAN_PARTS = [Head, Body, Arm_Left, Arm_Right, Leg_Left, Leg_Right]

interface HmanDrawProps {
  numberofGuess?: number
}

export const HmanDraw = ({numberofGuess}: HmanDrawProps) => {
  return(
    <div className="flex flex-row w-[200px] h-[350px] lg:row-span-2 lg:col-end-1 lg:mr-10">
      <div className="relative">
        <div className="w-[200px] h-[20px] bg-white/75"></div>
        <div className="w-[20px] h-[300px] bg-white/75"></div>
        <div className="w-[150px] h-[20px] transform -translate-x-[65px] bg-white/75"></div>
        <div className="absolute top-[20px] right-0 w-[10px] h-[30px] bg-white/75"></div>

      </div>
      <div className="relative tranform -translate-x-[30px] translate-y-[50px]">
        {MAN_PARTS.slice(0, numberofGuess)}
      </div>
    </div>
  )
}
