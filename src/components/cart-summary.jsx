import { FaRupeeSign } from "react-icons/fa";

const CartSummary = ({total, threshold})=>{

        return <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between border-b pb-2 mb-3">
                <span>Subtotal:</span>
                <span><FaRupeeSign className="inline"/> {total}</span>
            </div>
            {threshold - total > 0 ? <div className="bg-[#d1e5f4] rounded-lg p-4">
                <p className="my-2">Add <FaRupeeSign className="inline"/> {threshold - total} more to get a FREE Wireless Mouse!</p>
                <div className="bg-[#d3d3d3] h-4 w-full rounded-full">
                    <span className="block bg-[#4361ee] h-4 w-[50%] rounded-full transition-all ease-in-out" style={{width:total/threshold*100+"%"}}></span>
                </div>
            </div> : <p>You got a free Wireless Mouse!</p> }
            
        </div>
}
export default CartSummary;