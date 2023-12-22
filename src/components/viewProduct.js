import ProductItem from "./productItem";
import ViewProductItem from './viewProductItems'; 


function ViewProducts(props){

    return props.myProducts.map(
        (product)=>{
            return <ViewProductItem myProduct={product} key={product._id} Reload={()=>{props.ReloadData();}}></ViewProductItem>
        }
    );

}

export default ViewProducts;