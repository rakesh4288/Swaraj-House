import AppImages from '../Assets';
import DebouncingExample from '../components/DebouncingExample';
import ThrottlingExample from '../components/ThrottlingExample';

const DebouncingPage = () => {
    return (
        <div id='debouncing-page'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="pageHeading"> What is Debouncing and Throttling in React </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h4>Debouncing and Throttling in React</h4>
                        <h5>Debouncing:</h5>
                        <p>
                            Debouncing is a technique where you delay the execution on some certain amount of time has passed. This is a very useful technique in some cases where you are calling function frequently. We should use this technique for improving the performance.
                        </p>

                        <p>
                            Generally we are using setTimeout() function for working with Debouncing. As you know we are not doing something new. This function is already present in native JavaScript. We are just using this technique for executing our function on some certain of time.
                        </p>

                        <h6>
                            There may be multiple usecase for using this technique But Most useful case is hen we are calling API on onChange event.
                        </h6>

                        <p>Yes so this is one of the best use case for api calling.</p>
                        <p className="text-danger">
                            Let's suppose you have one input and while typing any letter you wanted to execute the API. So just imagine your API will call will be executed on every typing letter. Now let's suppose any user typing 5-10 letter in just 4-5 seconds so how many API will get call. This is not a correct approach for searching.
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img src={AppImages.Debouncing_1_img} alt="Debouncing_Img_1" className="img-fluid" />
                        <br /><br /><br /><br /><br />
                        <p className="text-success">
                            Now let's see the solution: Here if we attach the API call inside setTimeout() function with some specific delay like 3 or 5 seconds, So after passing some certain amount of time this API call will get executed. So here we can avoid the multiple API call.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="bg-success" />

            <section className='container'>
                <DebouncingExample />
            </section>

            <hr className="bg-success" />

            <section className='container'>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Throttling</h5>
                        <p>
                            Throttling is a similar type of technique as like a debouncing. but instead of delaying the execution of a function on certain time. Here we are calling a function on every given interval time.
                        </p>

                        <p>
                            Here we are using setInterval() method to execute a function on given interval time.
                        </p>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th><span>Aspect</span></th>
                                    <th><span>Debouncing</span></th>
                                    <th><span>Throttling</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Definition</td>
                                    <td><span>Delays execution until a period of inactivity</span></td>
                                    <td><span>Limits execution to a fixed rate</span></td>
                                </tr>
                                <tr>
                                    <td>Execution Timing</td>
                                    <td><span>Executes once after the last event</span></td>
                                    <td><span>Executes at regular intervals</span></td>
                                </tr>
                                <tr>
                                    <td>Use Case</td>
                                    <td><span>Ideal for handling events with intermittent pauses (e.g., typing, resizing)</span></td>
                                    <td><span>Ideal for handling events with constant activity (e.g., scrolling, mouse movements)</span></td>
                                </tr>
                                <tr>
                                    <td>Advantage</td>
                                    <td><span>Reduces the number of function executions, which can improve performance and reduce unnecessary operations</span></td>
                                    <td><span>Ensures the function executes at a controlled rate, preventing performance degradation</span></td>
                                </tr>
                                <tr>
                                    <td>Disadvantage</td>
                                    <td><span>Delays function execution; might miss immediate feedback</span></td>
                                    <td><span>Might miss events if the throttle interval is too long</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div>
                            <img src={AppImages.Debouncing_2_img} alt='debouncing img 2' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>
                            <br />Debouncing and Throttling are similar only the difference is between the function behaviour.
                            Debouncing is working with setTimeout() and Throttling is working the setInterval().
                        </h6>

                        <ThrottlingExample />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DebouncingPage