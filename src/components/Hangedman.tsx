const Hangedman = () => {
    const stand = (
        <>
            <div className="absolute right-0 top-0 h-12 w-2 rounded-md bg-zinc-700" />
            <div className="ml-[124px] h-2 w-52 rounded-t-md bg-zinc-700" />
            <div className="ml-[124px] h-96 w-2 bg-zinc-700" />
            <div className="h-2 w-64 rounded-md bg-zinc-700" />
        </>
    );
    const head = <div className="absolute right-[-24px] top-12 h-14 w-14 rounded-full border-8 border-zinc-700" />;
    const body = <div className="absolute right-0 top-24 h-[105px] w-2 bg-zinc-700" />;
    const rightHand = (
        <div className="absolute right-[-64px] top-32 h-2 w-16 origin-bottom-left -rotate-[30deg] rounded-r-md bg-zinc-700" />
    );
    const leftHand = <div className="absolute right-[8px] top-32 h-2 w-16 origin-bottom-right rotate-[30deg] rounded-l-md bg-zinc-700" />;
    const rightLeg = <div className="absolute right-[-73px] top-48 h-2 w-20 origin-bottom-left rotate-[60deg] rounded-r-md bg-zinc-700" />;
    const leftLeg = <div className="absolute right-[1px] top-48 h-2 w-20 origin-bottom-right -rotate-[60deg] rounded-l-md bg-zinc-700" />;
    return (
        <div className="relative">
            {stand}
            {head}
            {body}
            {rightHand}
            {leftHand}
            {rightLeg}
            {leftLeg}
        </div>
    );
};
export default Hangedman;
