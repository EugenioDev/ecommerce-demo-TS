
import { Skeleton } from '../../external/components/ui/skeleton'
function LoadingCategory() {
    const length = 20;
    const renderItems = Array.from({ length: length });
    return (
        <>
            {renderItems.map((_, index) => (
                <div key={index} className="mt-2 w-full flex flex-col animate-pulse">
                    <Skeleton className=" w-full md:h-[150px] object-cover md:w-[250px] animate-pulse bg-slate-300" />
                </div>
            ))}
        </>
    )
}

export default LoadingCategory