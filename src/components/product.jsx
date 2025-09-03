import { FaRupeeSign } from "react-icons/fa";
const Product = ({product,handleAddToCart})=>{
    return <>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2">
            <span className="block">{product.name}</span>
            <span className="block"> <FaRupeeSign className="inline"/> {product.price}</span>
            <button onClick={()=>handleAddToCart(product)} className="bg-[#4361ee] text-white px-4 py-2 rounded-sm w-full">Add to cart</button>
        </div>
    </>
}
export default Product;