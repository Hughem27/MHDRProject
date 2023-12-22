import { useState } from "react";

function Home({isLoggedIn}) {

    const loginVisible = {
        display: isLoggedIn ? 'none' : 'block'
    };


    return (
        <div>
            <div className="container px-4 px-lg-5">

                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://images.fanpop.com/images/image_uploads/Canadian-Kwik-E-Mart-the-simpsons-movie-384841_1024_768.jpg" alt="..." /></div>
                    {/* <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div> */}

                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Marks DR Kwiki Mart</h1>
                        <p>This is a my project to sell you stuff. To See products on sale click on the navbar shop, to add products to the range click add products </p>
                        <a className="btn btn-primary" href="shop">See our products here!</a>
                    </div>
                </div>

                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-body"><p className="text-white m-0">Some other cool stuff or something.. idk</p></div>
                </div>

                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">This Card will have products... probably</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>

                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="shop">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">About Us</h2>
                                <p className="card-text">To learn more about our shop, our products and our history, click here!</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div>
                                
                                <div style={loginVisible}>
                                    {/* This div is only visible when isVisible is true. */}
                                    <div className="card-body">
                                        <h2 className="card-title">Login</h2>
                                        <p className="card-text">Login to add add or edit products.</p>
                                    </div>
                                    <div className="card-footer"><a className="btn btn-primary btn-sm" href="/login">Click here to login!</a></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin:'200px'}}></div>

        </div >
    );
}
export default Home;