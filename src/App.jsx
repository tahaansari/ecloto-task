import ProductList from "./components/product-list"
import CartSummary from "./components/cart-summary"
import CartItems from "./components/cart-items"
import GiftItem from "./components/gift-item"

import {useState} from "react"

const PRODUCTS = [
{ id: 1, name: "Laptop", price: 500 },
{ id: 2, name: "Smartphone", price: 300 },
{ id: 3, name: "Headphones", price: 100 },
{ id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [total,setTotal] = useState(0);
  const [cart,setCart] = useState([]);

  const handleAddToCart = (product)=>{
    setTotal((prev)=> prev + product.price)
    setCart((prev)=>{
      // IF CART IS EMPTY ADD PRODUCT WITH QUANTITY 1
      if(prev && prev.length === 0){
        return [...prev, {...product, quantity:1}]
      }else{
        // IF PRODUCT ALREADY IN CART THEN ONLY UPDATE THE QUANTITY 
        const exist = prev.find((prod)=>prod.id===product.id);
        if(exist){
          return prev.map((prod)=>{
            return prod.id===product.id ? {...prod, quantity: prod.quantity+1} : prod;
          })
        }else{
          // ADD NEW PRODUCT
          return [...prev, {...product, quantity:1}]
        }
      }
    })
  }
  const updateCart = (product, {type}) => {
    // console.log('update cart clicked '+type)
    setTotal((prev)=> type=="add" ? prev + product.price : prev - product.price)
    setCart((prev)=>{
      // REMOVE FROM CART IF VALUE IS 1 AND TYPE IS REMOVE
      const checkRemove = prev.find((prod)=> prod.id===product.id && prod.quantity === 1 && type=="remove")
      if(checkRemove){
          return prev.filter((prod)=> prod.id !== product.id)
      }else{
        return prev.map((prod)=>{
          return prod.id===product.id ? type==="add" ? {...prod, quantity: prod.quantity+1} : {...prod, quantity: prod.quantity-1} : prod;
        })
      }
    })
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-10">Shopping Cart</h1>
      <div className="product-section py-5">
        <h2 className="text-2xl font-medium my-2">Products</h2>
        <ProductList products={PRODUCTS} handleAddToCart={handleAddToCart}/>
      </div>
      <div className="cart-summary-section py-5">
          <h2 className="text-2xl font-medium my-2">Cart Summary</h2>
          <CartSummary total={total} threshold={THRESHOLD}/>
      </div>
      <div className="cart-items-section py-5">
            <h2 className="text-2xl font-medium my-2">Cart Items</h2>
            <CartItems cart={cart} updateCart={updateCart}/>
            {total >= THRESHOLD &&  <GiftItem data={FREE_GIFT} />}
      </div>
    </div>
  )
}

export default App
