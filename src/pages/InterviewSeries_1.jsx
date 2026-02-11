import AppImages from "../assets";
// import DerivedStates from "../Components/DerivedStates";

const InterviewSeries_1 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 1  <i className="bi bi-fullscreen"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>What is Virtual DOM concept in React Js</h5>
                            <h6>Before leaning virtual let's understand the DOM first</h6>
                            <div className="alert alert-warning">
                                <h6>What is DOM ?</h6>
                                <p>
                                    <b>DOM stands for Document Object Model.</b> In simple terms, This is a structural representation of the HTML elements which are present in a webpage. DOM represents the entire UI of your application as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript
                                </p>
                            </div>

                            <div className="alert alert-info">
                                <h6>What is Virtual DOM ?</h6>
                                <p><b>Virtual DOM is a lightweighted copy of the actual DOM.</b> This is a virtual representation of the DOM and its optimized the code and take the updates on every object that exists in the original DOM,</p>

                                <p>
                                    Manipulating the DOM is slow,  but manipulating Virtual DOM is very fast because its not taking full refresh of the page, only selected node will get changed.
                                </p>

                                <p>
                                    So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>Understand by Figure: </p>
                            <p>
                                <img src={AppImages.Virtual_Dom_Img} alt="Virtual_Dom_Img" className="img-fluid" />
                            </p>

                            <div className="alert alert-danger">
                                <h6>Summary</h6>
                                <p>
                                    <b>Virtual DOM plays a major role in boosting the performance</b> of the applications. When the state of a component changes in an application, the Virtual DOM is getting updated and then compared with its previous state of the component. This feature made things move faster and also reduced cost. <br/> We hope you understood the comparison of virtual dom vs real dom and why React uses virtual dom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="prop_vs_state">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Difference between props and state ?</h4>
                            <p>
                                When we start working with React JS, it's very important to understand the differences between state and props.
                                Here, we'll take a look at some common conditions and compare the behavior of props and state.
                            </p>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Props</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>States are managing within the component</td>
                                        <td>But Props are getting passed from the parent component</td>
                                    </tr>

                                    <tr>
                                        <td>State can be changed, hence this a mutable</td>
                                        <td>Where props are in readonly mode we cannot be change, hence this is called immutable</td>
                                    </tr>

                                    <tr>
                                        <td>States are controlled by React component</td>
                                        <td>Where as Props are controlled by the parent component</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>State vs Props in React: A Comparison Table</h5>
                            <p>
                                <img src={AppImages.State_Props_Camparison_img} alt="state props" className="img-fluid" />
                            </p>

                            <p>
                                As we can see from the table, <b>props</b> and <b>states</b> have some similarities. They are both plain JavaScript objects that can contain default values, and they are both read-only when using the `this` keyword.
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                <img src={AppImages.State_vs_Props_img} alt="state props" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="spread-operator-with-props">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h5>Using Spread Operator with Component Props:</h5>
                            <h6>What will be happen if we pass the hard code value along with dynamic object</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                If we pass the hard code props along with existing dynamic props so the priority of rendering will be hard coded props 
                            </p>
                            <p>
                                <img src={AppImages.Props_Design_1_img} alt="props design one" className="img-fluid" />
                            </p>
                            
                            <h6>Another Approach</h6>
                            <p>
                                <img src={AppImages.Props_Design_3_img} alt="props design three" className="img-fluid" />
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                Here you can see we are just accepting the props as we do regularly.
                            </p>

                            <p>
                                <img src={AppImages.Props_Design_2_img} alt="props design two" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="bidirectional-vs-unidirectional">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>React js is bidirectional or unidirectional</h4>
                            <p>
                                React Js uses a unidirectional data flow, which means that data flows in one direction, from parent to child components. This is a structural best practice for React applications.
                            </p>

                            <div className="alert alert-warning">
                                The React core team strongly recommends use a unidirectional data flow as often as possible.
                            </div>

                            <p>
                                <b>Unidirectional Data Flow:</b> React enforces a unidirectional data flow, where data flows downwards from parent components to child components via props. This one-way flow of data makes the application state more predictable and easier to reason about.
                            </p>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Unidirectional data flow</th>
                                    </tr>

                                    <tr>
                                        <td>How data flows</td>
                                        <td>Data flows down from parent components to child components via props</td>
                                    </tr>

                                    <tr>
                                        <td>Benefits</td>
                                        <td>Makes the application state more predictable and easier to reason about, and makes large scale codebases easier to follow and more performant</td>
                                    </tr>

                                    <tr>
                                        <td>What can't happen</td>
                                        <td>Child components can't update the data that comes from parent components, and the view can't change the state</td>
                                    </tr>

                                    <tr>
                                        <td>What to do if a child component needs to send a message to its parent</td>
                                        <td>Use a special technique called inversion data flow or some callback technique</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src={AppImages.React_Data_Approach_img} alt="react-data-approach" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>

            <section id="package-vs-package-lock.json">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h5>Difference between package.json and package-lock.json ?</h5>
                        </div>
                    </div>  

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>package.json</h6>
                            <p>
                                Package.json is the main configuration for any Node.js project.
                            </p>

                            <ul>
                                <li>
                                    This file contains the metadata information about the project like project name, project description, author & license information, scripts, etc.
                                </li>
                                
                                <li>
                                    There are two types of dependencies, first is the dependencies and another one is dev dependencies.
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>package-lock.json</h6>
                            <p>
                                package-lock.json file is automatically generated by npm.
                            </p>

                            <ul>
                                <li> 
                                    Actually package-lock.json is maintaining the exact version of each installed package in React application which allows you to re-install them. Future installs will be able to build an identical dependency tree.
                                </li>

                                <li>
                                    The package-lock.json is used to lock the dependencies to a specific version number.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-success"/>

            <section id="dependencies-vs-Devdependencies" className="lightBlue pt-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h4>Difference between dependencies vs dev dependencies ?</h4>
                            <p>
                                Every node js project is having a file called package.json, which serves as a central repository for an important project metadata. <br/> This file holds the information such as dependencies and dev dependencies.
                            </p>
                        </div>
                    </div>  

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>Dependencies</h6>
                            <p>
                                Dependencies are mostly required for the production build and core functionality of the React. In other ways - dependencies are required to run the application in production,
                            </p>

                             <ul>
                                <li> 
                                    <b>Production Use:</b> These are essential for running the application in production.
                                </li>

                                <li>
                                    <b>Automatic Installation:</b> These packages are automatically installed when you run npm install command.
                                </li>
                            </ul>

                            <p>
                                <img  src={AppImages.Dependecies} alt={AppImages.Dependecies} className="img-fluid"/>
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>Dev Dependencies</h6>
                            <p>
                                Where as Dev Dependencies are the required only during development phase, not in production.
                            </p>
                            <p>
                                In package.json file, there is an object called as dev Dependencies and its containing the all packages that are used in the project in its development phase and not in the production or testing environment
                            </p>

                            <p>
                                <img  src={AppImages.DevDependecies} alt={AppImages.DevDependecies} className="img-fluid"/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger"/>

            <section id="caret-vs-tilde" className="pt-3 mb-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h5>What is difference between symbols ^ caret and ~ tilde in Package.json file ?</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className="border p-2">
                                <h6>Caret (^) — Compatible updates (most commonly used)</h6>
                                <p>Allows updates that do NOT change the left-most non-zero number (major version).</p>
                                <p className="lightBlue p-1">
                                    <b>"react": "^18.2.0"</b>
                                </p>

                                <p> 
                                    Allowed versions:
                                    <ul>
                                        <li>18.2.1</li>
                                        <li>18.5.0</li>
                                        <li>18.9.9</li>
                                    </ul>
                                </p>

                                <p>
                                    Not allowed:
                                    <ul>
                                        <li>19.0.0</li>
                                    </ul>
                                </p>

                                <p>
                                    Rule:
                                   <ul>
                                        <li> ^MAJOR.MINOR.PATCH</li>
                                        <li>→ Can update MINOR and PATCH</li>
                                        <li>→ Cannot update MAJOR</li>
                                   </ul>
                                </p>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className="border p-2">
                                <h6>Tilde (~) — Patch-level updates only</h6>
                                <p>Allows updates only within the same minor version.</p>
                                <p className="lightBlue p-1">
                                    <b> "react": "~18.2.0" </b>
                                </p>
                                <p>
                                    Allowed versions:
                                    <ul>
                                        <li>18.2.1</li>
                                        <li>18.2.5</li>
                                    </ul>
                                </p>

                                <p>
                                    Not allowed:
                                    <ul>
                                        <li>18.3.0</li>
                                        <li>19.0.0</li>
                                    </ul>
                                </p>

                                <p>
                                    Rule:
                                    <ul>
                                        <li>~MAJOR.MINOR.PATCH</li>
                                        <li>→ Can update PATCH only</li>
                                        <li> → MINOR & MAJOR are locked</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger"/>

            <section id="derived-state" className="pt-3 mb-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>What is Derived States ?</h5>
                            <h6>
                                Derived states is basically a state value that can be computed from the existing states or props instead of storing a independently.
                            </h6>

                            <h6>
                                Actually this is a way to avoid the redundant data and keep the states straight forward in the component.
                            </h6>

                            {/* <DerivedStates /> */}
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className="border p-2">
                                <h6>Look at below screenshot:</h6>
                                <p>
                                    Total variable coming from Derived States, as soon as User states get updated so total variable will also get updated.
                                </p>

                                <p>
                                    <img  src={AppImages.Derived_States_Img} alt={AppImages.Derived_States_Img} className="img-fluid"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewSeries_1;