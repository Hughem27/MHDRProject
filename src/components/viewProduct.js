import ProductItem from "./productItem";
import ViewProductItem from './viewProductItems'; 


function ViewProducts(props){

    return props.myBooks.map(
        (book)=>{
            return <ViewProductItem myBook={book} key={book._id} Reload={()=>{props.ReloadData();}}></ViewProductItem>
        }
    );

}

export default ViewProducts;