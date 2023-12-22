import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditProduct() {
    let { id } = useParams();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/product/' + id)
                .then((response) => {
                    setTitle(response.data.title);
                    setImage(response.data.image);
                    setDescription(response.data.description);
                    setPrice(response.data.price);
                })
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            title: title,
            image: image,
            description: description,
            price: price
        }

        axios.put('http://localhost:4000/api/product/' + id, product)
            .then((res) => {
                navigate('/shop');
            })
            .catch(
                (error) => {
                    console.log(error)
                });
    }


    const backToAdmin = () => {
        navigate('/adminpage'); // Navigate to the '/adminpage'
    };

    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Product Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Product image: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Product Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Product description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Edit Product">
                    </input>
                </div>
            </form>

            {/* Back to Admin Center Page */}
            <div>
                <button onClick={backToAdmin}>Back to Control Center</button>
            </div>

        </div>
    );
}