import { useCallback, useEffect, useState } from "react";
import Hangedman from "../components/Hangedman";
import Keyboard from "../components/Keyboard";
import Word from "../components/Word";

const Hangman = () => {
    const [guessingWord, setGuessingWord] = useState("korean");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter((letter) => !guessingWord.includes(letter));
    const correctLetters = guessedLetters.filter((letter) => guessingWord.includes(letter));

    const haveLost = incorrectLetters.length >= 6;
    const haveWon = guessingWord.split("").every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || haveLost || haveWon) return;
            setGuessedLetters((prev) => [...prev, letter]);
        },
        [guessedLetters]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase().match(/^[a-z]$/)) {
                addGuessedLetter(e.key.toLowerCase());
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guessedLetters]);

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Hangman</h1>
            <div className="flex justify-center gap-2">
                <span>{haveLost && "You loose"}</span>
                <span>{haveWon && "You won"}</span>
            </div>
            <Hangedman guesses={incorrectLetters.length} />
            <Word reveal={haveLost} guessingWord={guessingWord} guessedLetters={guessedLetters} />
            <Keyboard
                correctLetters={correctLetters}
                incorrectLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
                disabled={haveLost || haveWon}
            />
        </>
    );
};
export default Hangman;
