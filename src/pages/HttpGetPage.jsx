import ProductGetApi from "../components/ProductGetApi";

const HttpGetPage = () => {
    return (
        <div id="http-get-page"> 
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> HTTP GET Method </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products-api">
                <ProductGetApi />
            </section>
        </div>
    )
}

export default HttpGetPage;