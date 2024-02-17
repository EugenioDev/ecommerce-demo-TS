import { Skeleton } from '../../external/components/ui/skeleton'

function Loading() {
    const length = 100;
    const renderItems = Array.from({ length: length });

    return (
        <>
            {renderItems.map((_, index) => (
                <div key={index} className="mt-2 w-full flex flex-col animate-pulse">
                    <Skeleton className=" w-full md:h-[150px] object-cover md:w-[250px] animate-pulse bg-slate-300" />
                    <div className="mt-2">
                        <Skeleton className="text-gray-400 truncate bg-slate-300 animate-pulse" />
                        <Skeleton className="text-xs mt-2 bg-slate-300 animate-pulse" />
                    </div>
                    <Skeleton className="w-full mt-2 cursor-pointer bg-slate-400/50 md:rounded-lg bg-slate-300 animate-pulse p-2" />
                    <Skeleton className="w-[50px] mt-2 cursor-pointer bg-slate-400/50 md:rounded-lg bg-slate-300 animate-pulse p-2" />
                    <Skeleton className="w-full h-[30px] mt-2 cursor-pointer bg-slate-400/50 md:rounded-lg bg-slate-300 animate-pulse p-2" />
                </div>
            ))}
        </>
    );
}

export default Loading