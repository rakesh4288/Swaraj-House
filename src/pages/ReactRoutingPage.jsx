// import { Link } from "react-router-dom";
import AppImages from "../Assets";
const ReactRoutingPage = () => {
    return (
        <div> 
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                            <h4 className="pageHeading">
                                How to configure the React Routing <i className="bi bi-border-right"></i>
                            </h4>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            {/* <Link to="/simple-crud-using-redux-toolkit" className="btn btn-warning btn-sm">Crud Operation using Redux Toolkit</Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="basic-router-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>As we know routing is something which is related to the navigation. Using routing we can visit to every pages and component of the application</h6>

                            <h6>React is also providing the routing !</h6>
                            <div className="alert alert-warning">
                                Points to remember: But while installing the react, React is not providing the router package inside your application. You need to install the react-router-dom separately.
                            </div>

                            <div id="installing-router-steps">
                                <h5>
                                    Here are the steps to install the react router and setup the router Step By Step:
                                </h5>
                                <ol type="1">
                                    <li>
                                        As we know the React does provides the router packages while installing the Router so, in that case we need to install the router packages explicitly.
                                    </li>
                                    <li>Here is the NPM command for installing the same : <b>npm i react-router-dom</b> and current version is that - V7.6.0 But the stable version is 6</li>
                                    <li>
                                        Here you can see we installed the required packages. <br/>
                                        <img src={AppImages.RouterPackages_img} alt="router-packages" className="img-fluid" />
                                    </li>
                                    <li>After installing that we need to work on Router of our application</li>
                                </ol>

                                <hr className="bg-primary"/>
                                <ol>
                                    <li>
                                        The first step would be to wrap your application with <b>BrowserRouter</b> which is available inside the <b>react-router-dom</b> You have to open the index.js file like below
                                        <img src={AppImages.RouterIndexWrap_img} alt="router-index-wrapping" className="img-fluid" />
                                    </li>
                                    <li className="text-danger">
                                        BrowserRouter is so important Because with the help of this we are binding the full routes to our application.
                                    </li>
                                    <li>Now only two setps are remaining: one is you need to provide the Link where you can click and try to navigate</li>
                                    <li>You need to use the <b>Link component</b> which is easily available inside the same <b>react-router-dom</b></li>
                                    <li>after importing the Link, you need to use the <b>to="/your-url-name"</b> this is the attribute for the Link</li>
                                    <li>Once you click this Link you can easily see at the URL,  whatever you mentioned inside the to attribute same value is coming at the URL</li>
                                    <li className="text-danger">But at this time you can't see you desired component Why because React is not able to understand which component should be render. so this is the last step where you need to configure the your routing.</li>
                                </ol>

                                <hr className="bg-primary"/>
                                <h6>Last step to understand:</h6>
                                <ol type="A">
                                    <li>Finally you need to open the App.js, Here you need to configure the all routes which is required ! </li>
                                    <li>Firstly you need to import the <b>Routes</b> and <b>Route</b> from <b>react-router-dom</b> </li>
                                    <li><img src={AppImages.RouterAppImports_img} alt={AppImages.RouterAppImports_img} className="img-fluid" /></li>
                                    <li>Now go to the return block and configure like this:</li>
                                    <li>
                                        <img src={AppImages.RouterAppConfigure_img} alt={AppImages.RouterAppConfigure_img} className="img-fluid"  />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactRoutingPage;