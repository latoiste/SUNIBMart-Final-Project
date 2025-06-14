import { ClipLoader } from "react-spinners";

function LoadingOverlay() {
    return (
        <div className="flex rounded-2xl justify-center items-center absolute w-full h-full bg-gray-100 dark:bg-neutral-800 opacity-75 z-10">
            <ClipLoader speedMultiplier={0.5} size={75}/>
        </div>
    )
}
export default LoadingOverlay;