import { useEffect, useState } from "react";

interface Props {
    guessingWord: string;
    guessedLetters: string[];
    reveal?: boolean;
}

const Word = ({ guessingWord, guessedLetters, reveal }: Props) => {
    const [word, setWord] = useState("");
    useEffect(() => {
        setWord(guessingWord);
    }, [guessingWord]);
    return (
        <div className="flex max-w-7xl flex-wrap gap-[0.25em] font-mono text-7xl font-bold uppercase text-zinc-800">
            {word.split("").map((letter, i) => {
                return (
                    <span key={`${letter} ${i + 1}`} className="border-b-8 border-zinc-800">
                        <span
                            className={`
                            ${guessedLetters.includes(letter) || reveal ? "visible opacity-100" : "invisible opacity-0"}
                            transition
                            ${!guessedLetters.includes(letter) && reveal ? "text-red-800" : "text-slate-500"}
                        `}
                        >
                            {letter}
                        </span>
                    </span>
                );
            })}
        </div>
    );
};
export default Word;
