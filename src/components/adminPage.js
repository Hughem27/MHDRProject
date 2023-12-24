

function AdminPage() {


// Control Center for staff to add, edit and delete products. Also ability to register, edit and delte new staff user accounts
    return (
        <div>
            <div className="container px-4 px-lg-5">

                <div className="row gx-4 gx-lg-5 align-items-center my-5" style={{ marginBottom: '50px', alignContent: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Control Center</h1>
                        <p>See Admin features below </p>

                    </div>

                </div>


                <div className="row gx-4 gx-lg-5" >
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Add Products Here</h2>

                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="create">Add Products</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Register Users</h2>
                                <p className="card-text"></p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="registration">Register Users Here</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Edit Products</h2>
                                <p className="card-text"></p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="shop">Edit Products</a></div>


                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: '200px' }}></div>

        </div >
    );
}
export default AdminPage;