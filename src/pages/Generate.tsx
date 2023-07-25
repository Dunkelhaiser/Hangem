import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { onlyLatin, sanitizeWord } from "../utils/sanitizeWord";

const Generate = () => {
    const [link, setLink] = useState("");
    const [word, setWord] = useState("");

    const generate = async () => {
        const sanitizedWord = sanitizeWord(word);
        if (!onlyLatin(word)) {
            toast.error("Only latin letters are allowed");
            return;
        }
        if (!sanitizedWord) {
            toast.error("Please enter a word");
            return;
        }
        if (sanitizedWord.length < 3) {
            toast.error("Word must be at least 3 characters long");
            return;
        }
        if (sanitizedWord.length > 40) {
            toast.error("Word must be at most 40 characters long");
            return;
        }
        setLink(`${window.location.href.split("generate")[0]}${btoa(word)}`);
    };

    return (
        <>
            <div className="w-full max-w-xl rounded-md bg-white p-8 shadow-gray-600">
                <h2 className="mb-4 text-xl font-bold text-zinc-800">Generate own word</h2>
                <div>
                    <input
                        onChange={(e) => setWord(e.currentTarget.value)}
                        className="mb-3 w-full border-b-2 border-zinc-700 text-zinc-700 outline-none"
                    />
                    <button
                        onClick={generate}
                        className="rounded-md bg-slate-500 p-2 text-zinc-50 transition hover:bg-slate-400 focus-visible:bg-slate-400 active:bg-slate-600"
                    >
                        Generate
                    </button>
                </div>
                {link && (
                    <span
                        onClick={() => {
                            navigator.clipboard.writeText(link);
                            toast.success("Copied to clipboard");
                        }}
                        className="mt-3 inline-block cursor-pointer break-all text-slate-600 transition hover:text-slate-500 focus-visible:text-slate-500 active:text-slate-700"
                        role="button"
                        tabIndex={0}
                    >
                        {link}
                    </span>
                )}
            </div>
            <Link
                to="/"
                className="text-slate-500 underline transition hover:text-slate-400 focus-visible:text-slate-400 active:text-slate-600"
            >
                Back
            </Link>
        </>
    );
};
export default Generate;
