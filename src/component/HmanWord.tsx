
interface HmanWordProps {
  guessedLetters?: string[]
  curWord: string
  gameOver: boolean
}

export const HmanWord = ({guessedLetters , gameOver = false, curWord}: HmanWordProps) => {

  return(
    <div className=" w-full h-[20vh] lg:translate-x-10 lg:pl-8 lg:h-[30vh] lg:row-end-1 lg:col-start-1 flex flex-row items-center justify-center gap-2 uppercase">
        {curWord.split("").map((letter: string, i: number)=>{
          return (
            <div key={i} className="w-[5vw] max-w-[100px] h-full border-b-3 border-orange-500 text-5xl lg:text-7xl flex items-end justify-center">
              <span className={`${(guessedLetters?.includes(letter)||gameOver)?"block":"hidden"}
                                ${(guessedLetters?.includes(letter)|| gameOver) ?"text-blue-700":"text-orange-700/50"}
              `}>{letter}</span>
            </div>
          )
        })}
    </div>
  )
}
