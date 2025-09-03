import { FaRupeeSign } from "react-icons/fa";

const CartItem = ({product, updateCart})=>{
    return <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <span>{product.name}</span>
                    <span><FaRupeeSign className="inline"/> {product.price} * {product.quantity} = <FaRupeeSign className="inline"/> {product.price * product.quantity}</span>
                </div>
                <div>
                    <span onClick={()=>updateCart(product, {type:"remove"})} className="cursor-pointer w-5 h-5 bg-[#ff0800] text-white p-2 px-4 rounded-sm">-</span>
                    <span className="px-4">{product.quantity}</span>
                    <span onClick={()=>updateCart(product, {type:"add"})} className="cursor-pointer w-5 h-5 bg-[#5bb450] text-white  p-2 px-4 rounded-sm">+</span>
                </div>
            </div>
        </div>
}
export default CartItem;