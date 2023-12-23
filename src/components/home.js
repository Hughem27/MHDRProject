import { useState } from "react";

function Home({ isLoggedIn }) {
    const loginVisible = {
        display: isLoggedIn ? 'none' : 'block'
    };

    return (
        <div>
            <div className="container px-4 px-lg-5">
                {/* Image and Description Section */}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    {/* Image */}
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://images.fanpop.com/images/image_uploads/Canadian-Kwik-E-Mart-the-simpsons-movie-384841_1024_768.jpg" alt="..." /></div>
                    {/* Text */}
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Marks DR Kwiki-E-Mart</h1>
                        <p>This is my project to sell you stuff. To see products on sale click on the navbar shop, to add products to the range click add products.</p>
                        <a className="btn btn-primary" href="shopproducts">See our products here!</a>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-body"><p className="text-white m-0">Some other cool stuff or something... idk</p></div>
                </div>

                {/* Cards Section */}
                <div className="row gx-4 gx-lg-5">
                    {/* Product Info Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">What we have to offer</h2>
                                <p className="card-text">See our store.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="shopproducts">Browse</a></div>
                        </div>
                    </div>
                    {/* About Us Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">About Us</h2>
                                <p className="card-text">To learn more about our shop, our products, and our history, click here!</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="/about">More Info</a></div>
                        </div>
                    </div>
                    {/* Login Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Login</h2>
                                <p className="card-text">Login to add or edit products.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="/login">Click here to login!</a></div>
                        </div>
                    </div>
                    {/* API Card - Full Width */}
                    <div className="col-md-12 mb-5">
                        <div className="card h-100">
                            <div style={loginVisible}>
                                <div className="card-body">
                                    <h2 className="card-title">Checkout out the xyz API</h2>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary btn-sm" href="/api-page">Click here to see it!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: '200px' }}></div>
        </div>
    );
}

export default Home;
