const Hovercard = () => {
    return(
    <div className="flex min-h-screen flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl transition-all duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"src="" alt="" />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold">lorem</h1>
                        <p className="text-lg">lorem Lorem ipsum dolor sit </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Hovercard;