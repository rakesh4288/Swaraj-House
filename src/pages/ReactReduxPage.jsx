import { Link } from 'react-router-dom';
import ReduxConfiguration from '../components/ReduxConfiguration';
import AppImages from '../assets';
import CounterAppByRedux from '../components/CounterAppByRedux';

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

            <section className='container'>
                <div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <ReduxConfiguration />
                    </div>
                </div>
            </section>

            {/* <section className="container">
                <div className='row'>
                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        <p>
                            <img src={AppImages.Redux_Store_img_3} alt='useSelectorImg' className='img-fluid' />
                        </p>

                        <div>
                            <h5>What are the action in Redux ?</h5>
                            <p>
                                I would say in simple terms so Actions are the just messagenger which is just dispatching your type of action to the reducer like what to do. <br /> <br />Then reducer are taking the action and performing the operations and updating the state.
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
            </section> */}

            <section id='what-are-the-reducers' className="bg-light pt-4 pb-4 mt-4 mb-4 border-top border-bottom border-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What are the Reducers in Redux ?</h4>
                            <p>
                                Reducers are the actual place where you are manipulating the states and defining your actual logic here.
                            </p>

                            <p>
                                Reducers: As we know already, actions are only telling what to do, but they don't tell how to do, so reducers are the pure functions that take the current state and action and return the new state and telling the store how to do.
                                <br />
                                Store: The store is the object which holds the state of the application.
                            </p>

                            <h6>Here is a syntax:</h6>
                            <pre className="bg-warning p-2">
                                <span>(State,action) =&gt; newState</span><br />
                            </pre>

                            <p className="bg-warning p-2 text-dark">
                                If you see here we are passing the states and also sending the action type as parameter. So what type of the action we are requesting from Redux Store with the help of reducers only that states are returning.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="lightGreenBG">
                                <h6>can we have multiple reducers in redux</h6>
                                <p>
                                    Yes, it is possible to have a multiple reducers in Redux. While Redux maintains a single, immutable state tree, it provides a utility function called combineReducers to manage the different "slices," of that state tree with separate reducer functions.
                                </p>

                                <p>
                                    useContext and Redux both are the state management tools in React. The use of these two is totally based on the requirement. React JS by default providing the useContext where is Redux you need to install separately.
                                </p>

                                <p>useContext is useful for small level of application but not for the large applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6 className="text-danger">Prop Drilling Vs useContext Vs React Redux</h6>
                            <p>
                                <img src={AppImages.Redux_Store_img_4} alt="PropDrilling_vs_useContext_ReactRedux" className="img-fluid img-thumbnail" />
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <br />
                                <p className="lightGreenBG">
                                    <b>useContext </b>is helping to solve the Prop Drilling issue. If you have a multiple component which is combined with each other like Parent to child scenario at deep level and you need to get the one state from the top level component so in this case useContext Hook is really helpful for solving this
                                </p>

                                <p className="lightGreenBG">
                                    <b>Redux</b> is a more powerful library which is helping to managing the state. This is keeping the centralized state where any component can interact with centralized store and retrieve the latest states. <br />
                                    This is more useful for complex state requirements in the applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        <CounterAppByRedux initialState={0} />
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactReduxPage;