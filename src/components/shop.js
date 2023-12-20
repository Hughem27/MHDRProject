import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./product";

function Shop() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/books')
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
        axios.get('http://localhost:4000/api/books')
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
                    <Products myBooks={data} ReloadData={Reload} className='container'></Products>
                </div>
            </div>
        </div>
    );

}

export default Shop;