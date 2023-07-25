import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { generate } from "random-words";
import Hangedman from "../components/Hangedman";
import Keyboard from "../components/Keyboard";
import Word from "../components/Word";
import { removeWhitespaces, sanitizeWord } from "../utils/sanitizeWord";

const Hangman = () => {
    const [guessingWord, setGuessingWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter((letter) => !guessingWord.includes(letter));
    const correctLetters = guessedLetters.filter((letter) => guessingWord.includes(letter));

    const haveLost = incorrectLetters.length >= 6;
    const haveWon =
        removeWhitespaces(guessingWord)
            .split("")
            .every((letter) => guessedLetters.includes(letter)) && guessingWord.length > 0;

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || haveLost || haveWon) return;
            setGuessedLetters((prev) => [...prev, letter]);
        },
        [guessedLetters]
    );

    useEffect(() => {
        const word = generate({ exactly: 1, minLength: 5 })[0];
        setGuessingWord(sanitizeWord(word));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase().match(/^[a-z]$/)) {
                addGuessedLetter(e.key.toLowerCase());
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guessedLetters]);

    useEffect(() => {
        if (haveLost) toast.error("You lost!");
        if (haveWon) toast.success("You won!");
    }, [haveLost, haveWon]);

    return (
        <>
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
