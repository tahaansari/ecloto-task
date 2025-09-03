import Product from "./product"
const ProductList = ({products, handleAddToCart})=>{
    return  <div className="grid md:grid-cols-4 gap-4">
        {products.map((prod,index)=>{
            return <Product key={index} product={prod} handleAddToCart={handleAddToCart}/>
        })}
    </div>
}
export default ProductList