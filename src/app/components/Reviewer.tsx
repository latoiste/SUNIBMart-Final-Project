import { GiRoundStar } from "react-icons/gi";
import { Review } from "../types";

function Reviewer({ review }: {review: Review}) {
    const stars = [1, 2, 3, 4, 5];
    const month = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    function ParseDate(date: string) {
        const d = new Date(date);
        const time = d.toLocaleDateString().split('/');
        const formatted = `${time[1]} ${month[Number(time[0]) - 1]} ${time[2]}`;

        return formatted;
    }

    return (
        <div className="w-full border-b-2 border-gray-100 dark:border-neutral-800">
            <div className="flex items-baseline space-x-2">
                <p className="text-lg font-semibold">{review.reviewerName}</p>
                <p className="text-sm text-gray-600">{review.reviewerEmail}</p>
            </div>
            <div className="flex">
                {stars.map((star, index) => star <= review.rating ? 
                                    <GiRoundStar key={index} className="text-xl text-yellow-500"/> : 
                                    <GiRoundStar key={index} className="text-xl text-gray-500"/>)}

                <p className="text-sm ms-2">{ParseDate(review.date)}</p>
            </div>
            <div className="my-2">
                {review.comment}
            </div>
        </div>
    )
}
export default Reviewer;