
import{ KeyBtn }from "./KeyBtn.tsx";

const KEYS = ["q","w", "e", "r","t", "y", "u",  "i", "o", "p","<-", "#", "a", "s", "d", "f", "g", "h", "j", "k","l",  
  "#", "#", "#","z","x", "c","v",  "b", "n", "m"]

interface KeyboardProps {
  correctLetters?: string[]
  incorrectLetters?: string[]
  gameOver: boolean
  onClick: (key: string)=> void
}

export const Keyboard = ({onClick, gameOver, correctLetters, incorrectLetters}: KeyboardProps) => {

  return(
    <div className=" w-full px-4 max-w-[500px] md:max-w-[700px] md:gap-2 md:text-xl lg:translate-x-10 lg:pl-8 lg:row-start-1 lg:row-end-1 lg:h-[30vh] lg:py-10 lg:col-start-1 grid grid-rows-3 grid-cols-11 gap-1">
      {KEYS.map((value, index)=>{
        const isCorrect = correctLetters?.includes(value)
        const isInCorrect = incorrectLetters?.includes(value)
        return <KeyBtn key={index} value={value} disabled={isInCorrect||isCorrect|| gameOver}  onClick={onClick} index={index}/>
      })}
    </div>
  )
}
