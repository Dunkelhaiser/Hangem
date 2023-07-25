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
    reset: () => void;
}

const Keyboard = ({ correctLetters, incorrectLetters, addGuessedLetter, disabled, reset }: Props) => {
    return (
        <div className=" flex w-full max-w-2xl flex-wrap justify-center gap-2">
            {keys.map((key) => {
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        disabled={incorrectLetters.includes(key) || disabled || correctLetters.includes(key)}
                        key={key}
                        className={`aspect-square h-14 w-14 rounded-md p-2 font-bold uppercase text-zinc-50 transition ${
                            correctLetters.includes(key) || incorrectLetters.includes(key) || disabled
                                ? "cursor-default"
                                : "cursor-pointer hover:bg-zinc-700 focus-visible:bg-zinc-700 active:bg-zinc-900"
                        } 
                        ${!correctLetters.includes(key) && !incorrectLetters.includes(key) && "bg-zinc-800"}
                        ${incorrectLetters.includes(key) && "bg-zinc-400"} ${correctLetters.includes(key) && "bg-slate-500"}`}
                    >
                        {key}
                    </button>
                );
            })}
            <button
                onClick={reset}
                className="aspect-square h-14 w-14 cursor-pointer rounded-md bg-zinc-800 p-2 text-2xl font-bold uppercase text-zinc-50 transition hover:bg-zinc-700 focus-visible:bg-zinc-700 active:bg-zinc-900"
            >
                ↺
            </button>
        </div>
    );
};
export default Keyboard;
