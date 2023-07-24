import { useState } from "react";

const Word = () => {
    const [word, setWord] = useState("hangman");
    const guessedLetters = ["a", "m"];
    return (
        <div className="flex gap-[0.25em] font-mono text-8xl font-bold uppercase text-zinc-800">
            {word.split("").map((letter, i) => {
                return (
                    <span key={`${letter} ${i + 1}`} className="border-b-8 border-zinc-800">
                        <span
                            className={`
                            ${guessedLetters.includes(letter) ? "visible" : "invisible"}
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
