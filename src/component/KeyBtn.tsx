
import clicksound from "../assets/click.mp3" 

const clickSound  = new Audio(clicksound)
// clickSound.volume = 0.5

interface KeyBtnProps {
    value: string
    onClick: (value: string) => void
    disabled?: boolean
    index: number
}

export const KeyBtn = ({value, onClick,index, disabled}: KeyBtnProps) => {
    const inFirstLine: boolean =Array.from(Array(11).keys()).includes(index)
    // Array.from({length: 10}, (_, i)=> i+1)
    const handleClick = (value: string) =>{
      onClick(value)
      clickSound.play()
    
    }
    
  return(
    <button  onClick={()=>handleClick(value)} className={`text-blue-900/75  hover:outline-1  hover:shadow-lg shadow shadow-white/75  
      transition transform hover rounded-md font-semibold  aspect-square flex items-center justify-center -outline-offset-1 outline-blue-500/50 
     ${inFirstLine && "pl-1/2"} ${value==="#" &&"opacity-0"}
     ${disabled?"text-white/75 bg-zinc-800/75 opacity-25 cursor-not-allowed shadow-inset shadow-white outline-1 -outline-offset-2 outline-blue-100/75":"bg-white/75 cursor-pointer hover:bg-white hover:scale-105"}`}>{value}</button>
  )
}
