import ProductItem from "./productItem";

function Products(props){

    return props.myBooks.map(
        (book)=>{
            return <ProductItem myBook={book} key={book._id} Reload={()=>{props.ReloadData();}}></ProductItem>
        }
    );

}

export default Products;