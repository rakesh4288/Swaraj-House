import React,  { createContext } from "react";
import AppImages from "../Assets";
import MyCountry from "../components/MyCountry";

// initialization of useContext Hook, since this is the hook so you need to import it
const CountryInfoContext = createContext();
export {CountryInfoContext};


const UseContextPage = () => {
    return (
        <div id='use-context-hook'> 
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> Use Reducer Hook <i className="bi bi-boxes"></i></h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <p> 
                            useContext() hook is a very useful hook for sharing the global info for all their child components. While using this we can ignore to use props because useContext is just helping to share the global info at very deep level component
                        </p>

                        <p>
                            React is a way to manage the state globally. If you have any global info and you wanted to pass in all comopnent or every child or nested child so in this case you can use the useContext hook
                        </p>

                        <h4>What was the problem:</h4>
                        <p>
                            <b>Detail Explanation:</b> Let's suppose you have multiple child component like parent to child or nested child so before useContext you need to use the props for passing the data, So in this approach your component structure will look like a prop drilling, 
                            <br/>So here React js providing the useContext API for avoiding the props drilling. Because it will become very difficult to handle this prop drilling issue
                        </p>
                        
                        <div className="alert alert-info">
                            <h6>
                                <i>Prop Drilling are something like when you are passing the props with parent to child component or its nested child component or nth child component so this is called prop drilling.</i>
                            </h6>

                            <h6>
                                Props drilling refers to the process of the data from a parent component to deeply nested child component through the multiple levels of components in React. It happens when you need to pass the props through multiple layers of component, even if some itermediate components don't need the data.
                            </h6>
                        </div>

                        <hr className="bg-primary"/>

                        <h5>Here is some example for useContext:</h5>
                        <ul>
                            <li>Global State</li>
                            <li>Themes</li>
                            <li>Services</li>
                            <li>User Setting</li>
                        </ul>

                        <hr className="bg-primary"/>

                        <h5>So here is the Solution:</h5>
                        <h6>
                        <i className="bi bi-arrow-right"></i> Solution is to create the context and React Js providing the useContext hook to solve this issue</h6>

                        <ul>
                            <li>
                                Firstly you need to create the context. you need to decide what kind of data you are going to pass in the deep level component
                            </li>
                            
                            <li>
                                After creating the context now you need to use the Provider, so basically providers is wrapping the child component and helping to hold the data to pass
                            </li>
                            
                            <li>
                                In your child component - you need to call the useContext hook for getting the global state.
                            </li>
                        </ul>

                        <p className="alert alert-warning">
                            Always make sure you are exporting your createContext variable in then bottom of component. Because without exporting we can not import the ueContext in last xyz component.
                        </p>

                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    <img src={AppImages.UseContext_1_img} className="img-fluid" alt="UseContextImg" />
                                </p>

                                <p>
                                    In this above screenshot we can easily understand its will be very difficult to handle and pass the props at very the deep level component. 
                                </p>
                            </div>

                            <div className="col-md-6">
                                <p>
                                    <img src={AppImages.UseContext_2_img} className="img-fluid" alt={AppImages.UseContext_2_img} />
                                </p>

                                <p>
                                    <img src={AppImages.UseContext_3_img} className="img-fluid" alt={AppImages.UseContext_3_img} />
                                </p>

                                <p>
                                    <img src={AppImages.UseContext_4_img} className="img-fluid" alt={AppImages.UseContext_3_img} />
                                </p>
                            </div>
                        </div>

                        <hr className="bg-success"/>

                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/s1Ix2jBhCkI?si=aA9v1YVqqo-9FSrr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>



                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <CountryInfoContext.Provider value={"India is a Big country"}>
                            <MyCountry />
                        </CountryInfoContext.Provider>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default UseContextPage;