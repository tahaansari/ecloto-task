import { FaRupeeSign } from "react-icons/fa";
const GiftItem = ({data})=>{
    return <div className="bg-white p-4 rounded-lg mt-4">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <span>{data.name}</span>
                    <span><FaRupeeSign className="inline"/> {data.price} * 1 = <FaRupeeSign className="inline"/> {data.price}</span>
                </div>
                <div>
                    <span className="bg-[#acd8a7] p-3 px-4 rounded-full uppercase">Free Gift</span>
                </div>
            </div>
        </div>
}
export default GiftItem;