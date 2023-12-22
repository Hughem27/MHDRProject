import { useEffect, useState } from "react";
import axios from "axios";
import ViewProduct from "./viewProduct";

import ViewProductItem from './viewProductItems'; // Adjust the path as necessary



function ViewProducts() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/products')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )

        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/products')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div >
            <h2>This is the Shop Component!</h2>
            <hr></hr>
            <div><h3>Product Range</h3>
                <div className="ShopProducts">
                    <ViewProduct myProducts={data} ReloadData={Reload} className='container'></ViewProduct>
                </div>
            </div>

            
        </div>
    );

}

export default ViewProducts;