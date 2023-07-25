interface Props {
    guesses: number;
}

const Hangedman = ({ guesses }: Props) => {
    const stand = (
        <>
            <div className="absolute right-0 top-0 h-10 w-2 rounded-md bg-zinc-700" />
            <div className="ml-[87px] h-2 w-44 rounded-t-md bg-zinc-700" />
            <div className="ml-[87px] h-80 w-2 bg-zinc-700" />
            <div className="h-2 w-44 rounded-md bg-zinc-700" />
        </>
    );
    const head = <div className="absolute right-[-24px] top-10 h-14 w-14 rounded-full border-8 border-zinc-700" />;
    const body = <div className="absolute right-0 top-[5.5rem] h-24 w-2 bg-zinc-700" />;
    const rightHand = (
        <div className="absolute right-[-56px] top-32 h-2 w-14 origin-bottom-left -rotate-[30deg] rounded-r-md bg-zinc-700" />
    );
    const leftHand = <div className="absolute right-[8px] top-32 h-2 w-14 origin-bottom-right rotate-[30deg] rounded-l-md bg-zinc-700" />;
    const rightLeg = <div className="absolute right-[-57px] top-44 h-2 w-16 origin-bottom-left rotate-[60deg] rounded-r-md bg-zinc-700" />;
    const leftLeg = <div className="absolute right-[1px] top-44 h-2 w-16 origin-bottom-right -rotate-[60deg] rounded-l-md bg-zinc-700" />;
    return (
        <div className="relative">
            {stand}
            {guesses > 0 && head}
            {guesses > 1 && body}
            {guesses > 2 && rightHand}
            {guesses > 3 && leftHand}
            {guesses > 4 && rightLeg}
            {guesses > 5 && leftLeg}
        </div>
    );
};
export default Hangedman;
