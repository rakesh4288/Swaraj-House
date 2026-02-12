import {Link} from 'react-router-dom'
import MpBoard12Result from '../components/MpBoard12Result';

const ApiIntegrationPage = () => {
    return (
        <div id="api-integration-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> How to Integrate the API in React JS </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="api-link-container">
                                <div className="api-link-item">
                                    <Link to="/http-get-method-in-react" className="gradient-link"><i className="bi bi-download"></i> HTTP GET Method </Link>
                                </div>

                                <div className="api-link-item">
                                    <Link to="/http-get-method" className="gradient-link"><i className="bi bi-arrow-up-circle"></i> HTTP POST Method </Link>
                                </div>

                                <div className="api-link-item">
                                    <Link to="/http-get-method" className="gradient-link"><i className="bi bi-graph-up"></i> Data Virtualization </Link>
                                </div>

                                <div className="api-link-item">
                                    <Link to="/http-get-method" className="gradient-link"><i className="bi bi-sort-down"></i> Ascending/Descending Order </Link>
                                </div>

                                <div className="api-link-item">
                                    <Link to="/http-get-method" className="gradient-link"><i className="bi bi-arrow-repeat"></i> Lazy loading / Infinite scroll </Link>
                                </div>

                                <div className="api-link-item">
                                    <Link to="/http-get-method" className="gradient-link"><i className="bi bi-list-ul"></i> Pagination </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='lightBlue pt-4 pb-4'>
                <div className='container'>
                    <MpBoard12Result />
                </div>
            </section>
        </div>
    )
}

export default ApiIntegrationPage;