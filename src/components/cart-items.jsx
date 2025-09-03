import CartItem from "./cart-item"
const CartItems = ({cart, updateCart})=>{

    if(cart && cart.length > 0){
            return <div className="flex flex-col gap-4"> {cart.map((prod,index)=>{
           return <CartItem updateCart={updateCart} key={index} product={prod}/>;
        })}</div>
    }else{
        return <div className="bg-white p-4 rounded-lg text-center">
            
            <h3 className="text-2xl my-4">Your Cart is empty</h3>
            <p>Add some products to see them here!</p>

        </div>
    }
        
        

        
}
export default CartItems;