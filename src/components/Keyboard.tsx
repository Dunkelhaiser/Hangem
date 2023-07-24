const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

interface Props {
    correctLetters: string[];
    incorrectLetters: string[];
    addGuessedLetter: (letter: string) => void;
    disabled?: boolean;
}

const Keyboard = ({ correctLetters, incorrectLetters, addGuessedLetter, disabled }: Props) => {
    return (
        <div className="grid w-full max-w-2xl grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-2">
            {keys.map((key) => {
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        disabled={incorrectLetters.includes(key) || disabled || correctLetters.includes(key)}
                        key={key}
                        className={`aspect-square rounded-md bg-zinc-800 p-2 font-bold uppercase text-zinc-50 transition ${
                            correctLetters.includes(key) || incorrectLetters.includes(key) || disabled
                                ? "cursor-default"
                                : "cursor-pointer hover:bg-zinc-700 focus-visible:bg-zinc-700 active:bg-zinc-900 "
                        } 
                        ${!incorrectLetters.includes(key) ? "" : "bg-zinc-400"} ${correctLetters.includes(key) ? "bg-slate-500" : ""}`}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
};
export default Keyboard;
