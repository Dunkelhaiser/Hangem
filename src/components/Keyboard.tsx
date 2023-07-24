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

const Keyboard = () => {
    return (
        <div className="grid w-full max-w-2xl grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-2">
            {keys.map((key) => {
                return (
                    <button
                        disabled={false}
                        key={key}
                        className={`aspect-square cursor-pointer rounded-md bg-zinc-800 p-2 font-bold uppercase text-zinc-50 transition 
                        [&:not(:disabled)]:hover:bg-zinc-700 [&:not(:disabled)]:focus-visible:bg-zinc-700 [&:not(:disabled)]:active:bg-zinc-900 
                        ${true ? "" : "opacity-30"} ${false ? "bg-slate-500" : ""}`}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
};
export default Keyboard;
