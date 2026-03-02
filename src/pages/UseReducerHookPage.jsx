import UseReducerEx from "../components/UseReducerEx";

const UseReducerHookPage = () => {
    return (
        <div id="use-reducer-hook-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> Use Reducer Hook </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <ul>
                            <li>useReducer hook is a very powerful hook that can simplify the complex state management in your react application.</li>
                            <li>This hook is verfy helpful for handling the large amount of todo function.</li>
                        </ul>

                        <h6>When do you use the useReducer Hook ?</h6>

                        <p>
                            So basically when you wanted to handle the several todo function,  so this can be a best situation where you can apply the useReducer hook.
                        </p>

                        <p className="text-danger">
                            The useReducer Hook returns the current state and a dispatch the method.
                        </p>

                        <p>
                            The reducer function contains your custom state logic and the initial state can be a simple value but generally will contain an object.
                        </p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <UseReducerEx />
                    </div>
                </div>


                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>Let's follow the below steps in order to implement the useReducer Hook:</h6>
                        <ul>
                            <li>Firslty You need to import the <b>useReducer</b> hook from the react</li>
                            <li>Since this is a function so you need to call the function and keep remember we need to pass the two parameters - one is reducer and another one is the initial state</li>
                            <li>Now we need to make the reducer function and inside that we can initialize the todos function and also we will assign the initial state for the second parameter.</li>
                            <li>Next is that you need to destruct the useRecuder function into array format</li>
                            <li>First will be the <b>State</b> and other one is <b>dispatch</b></li>
                        </ul>

                        <hr className="bg-primary" />

                        <ul>
                            <li>After above steps, this is the time Where we need to make the <b>reducer function</b></li>
                            <li>This function is accepting a two parameter one is <b>state</b> and another one is <b>action</b> </li>
                            <li>Only action is responsible for finding the manipulating or business logic</li>
                            <li>Now either you can make a <b>Switch Case statement</b> or <b>if conditoin</b></li>
                            <li>Now each case you need to verify and make the operation and dispatch the latest value</li>
                        </ul>

                        <ul>
                            <li>Here is the switch case statement come into the picture Because we have a large amount of todos function so we need to make the cases for per case</li>
                            <li>When we are dispaching the function on that we need to confirm our reguest type like what we are looking "Increment" or "Decrement"</li>
                        </ul>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/mEv3VFNu5Eo?si=U3kd0txvsExzdWNh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default UseReducerHookPage;