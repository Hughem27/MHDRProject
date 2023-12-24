import ProductItem from "./productItem";

function Products(props){
// For loading products
    return props.myProducts.map(
        (product)=>{
            return <ProductItem myProduct={product} key={product._id} Reload={()=>{props.ReloadData();}}></ProductItem>
        }
    );

}

export default Products;