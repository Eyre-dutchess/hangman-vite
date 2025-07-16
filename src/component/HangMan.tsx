import { useCallback, useState } from "react"
import { HmanDraw } from "./HmanDraw"
import { HmanWord } from "./HmanWord"
import { Keyboard } from "./Keyboard"
import words from "../assets/words.json";

const getWord = () =>{
    return words[Math.floor(Math.random()*words.length)]
}

const HangMan = () => {
    const [curWord, setCurWord] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    console.log(curWord)
    const incorrectLetters = guessedLetters.filter((letter)=> !curWord.includes(letter))
    const losing = incorrectLetters.length >=6
    const winning = curWord.split("").every((letter)=> guessedLetters?.includes(letter))

    const addGuessedLetter = useCallback((tempLet: string) =>{
        if(winning||losing||guessedLetters?.includes(tempLet)) return;
        setGuessedLetters((curLetters)=> [...curLetters!, tempLet])
       
    },[winning,losing,guessedLetters])

    const handleReset = () =>{
        setCurWord(getWord())
        setGuessedLetters([])
    }

    return (
        <div className="w-screen h-screen flex flex-col  py-4 bg-gradient-to-b space-y-4 from-orange-500/90 via-blue-500/90 to-white/95">
            <h1 className="w-max mx-auto px-4 text-white/75 text-3xl font-semibold text-center">Hang Man</h1>
            {(losing||winning) && (
                <div className="fixed z-50 left-0 top-[25vh] w-full h-[50vh] bg-white/70 drop-shadow-xl drop-shadow-white flex flex-col items-center justify-center gap-10">
                    <h6 className="text-3xl text-blue-500">{`${winning?"Good job! Start a new game!":"Nice effort! try again!"}`}</h6>
                    <button onClick={handleReset} className="w-1/2 max-w-[300px] py-3 rounded-full bg-blue-400 text-white/75 hover:text-white cursor-pointer transition hover:shadow shadow-blue-200">Reset</button>
                </div>
            )}
            <div className="h-[75vh] flex flex-col space-y-3 items-center justify-center lg:px-10 lg:gap-4 lg:translate-x-6 lg:grid lg:grid-cols-[repeat(2, 1fr)] lg:grid-rows-[repeat(2, 1fr)] ">
                <HmanDraw numberofGuess={incorrectLetters?.length}/>
                <HmanWord guessedLetters={guessedLetters} curWord = {curWord} gameOver={losing}/>
                <Keyboard incorrectLetters={incorrectLetters} correctLetters= {guessedLetters?.filter((letter: string)=> curWord.includes(letter))} gameOver={winning || losing} onClick={addGuessedLetter}/>
            </div>
        </div>
    )
}

export default HangMan