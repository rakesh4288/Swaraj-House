import { Link } from 'react-router-dom';
import ReduxConfiguration from '../components/ReduxConfiguration';
import AppImages from '../assets';

const ReactReduxPage = () => {
    
    return (
        <div id="react-redux-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                            <h4 className="pageHeading">
                                What is the React Redux  <i className="bi bi-border-right"></i>
                            </h4>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <Link to="/simple-crud-using-redux-toolkit" className="btn btn-warning btn-sm">Crud Operation using Redux Toolkit</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            React Redux is a state management library. Redux is simply helps to manage the state of your entire application
                        </p>

                        <p>
                            In the other words Redux is used to manage the data of the application by keeping the states in centralized store.
                        </p>

                        <p>
                            It provides a predictable state container by connecting React components to a centralized store, simplifying data flow and enabling efficient management of application state across components.
                        </p>

                        <p>
                            Redux Uses: It makes it easier to manage the state and data. As the complexity of our application increases. At the start, it is hard to understand but it helps to build complex applications. In the beginning, it feels like a lot of work, but it is really helpful.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h4>Why we learn React Redux?</h4>
                        <div>
                            <p>
                                In the React development most common task is to update the state, mostly you are passing the state from Parent to child component, and sometimes you need to pass the state from child to parent component. Let's check few scenarios:
                            </p>
                            <ul>
                                <li>
                                    Let's suppose you have some complex code structure where you are passing the state using the props so sometimes it can be a difficult to manage the props via upwards or downwards.
                                </li>

                                <li>
                                    Generally React passing the props via parent to child like Downwards it means top to the bottom, and similarly how you will the pass states from bottom to top you will use the callback options no any other methods are present to handle this case.
                                </li>

                                <li>
                                    So handle this situation you can use the Redux where Redux provides the centralized store to help the data flows and provides the smooth transitions to update the states
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container">
                <div className='row'>
                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        <ReduxConfiguration />
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        <p>
                            <img src={AppImages.Redux_Store_img_3} alt='useSelectorImg' className='img-fluid' />
                        </p>

                        <div>
                            <h5>What are the action in Redux ?</h5>
                            <p>
                                I would say in simple terms so Actions are the just messagenger which is just dispatching your type of action to the reducer like what to do. <br/> <br/>Then reducer are taking the action and performing the operations and updating the state.
                            </p>
                            <p>
                                Actions are the plain JavaScript objects that have a type field. As mentioned earlier,
                                you can think of an action as an event that describes something that happened in the application.
                            </p>
                        </div>

                        <h6>
                            Best tutorial for Setup: <Link to="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_blank">https://whataboutcoding.com/redux-toolkit-tutorial/</Link>
                        </h6>

                        <hr className="bg-primary" />
                        <p>
                            The <b>useSelector()</b> hook is primarily used for extracting the data from Redux store within the functional component. <b>useSelector()</b> takes a selector function as an argument. This function receiving the entire Redux store state and returns a specefic piece of data based on the component requirement.
                        </p>

                        <p className='text-danger'>
                            When the states are changing inside the Redux store, so the useSelector automatically re-renders and ensuring that you are always receiving the most up-to-date information.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        

                        {/* <CounterAppUsingRedux initialState={0} /> */}
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactReduxPage;