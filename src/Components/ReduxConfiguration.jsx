import { Link } from "react-router-dom";
import AppImages from '../assets/index';

const ReduxConfiguration = () => {
    return (
        <div id="redux-configuration" className="container">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h6 className="card-title">Steps for configuring React Redux</h6>

                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">1</span>
                            <div>
                                <div className="fw-bold">Step 1: Create the store</div>
                                <div className="small text-muted">Configure the central Redux store where you register feature reducers.</div>
                                <div className="mt-2">
                                    <img src={AppImages.Redux_Store_img_1} alt="redux store" className="img-fluid rounded shadow-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">2</span>
                            <div>
                                <div className="fw-bold">Step 2: Wrap app with <code>Provider</code></div>
                                <div className="small text-muted">Import the store and provide it at the app root.</div>

                                <pre className="bg-warning p-2 rounded mt-2"><code>import {'{ Provider }'} from 'react-redux';</code></pre>
                                <pre className="bg-warning p-2 rounded mt-2"><code>import {'{ store }'} from './redux/store';</code></pre>

                                <div className="mt-2">
                                    <img src={AppImages.Redux_Store_img_2} alt="provider" className="img-fluid rounded shadow-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">3</span>
                            <div>
                                <div className="fw-bold">Step 3: Create feature slices</div>
                                <div className="small text-muted">Create slice files using <code>createSlice</code> for each feature.</div>
                            </div>
                        </div>

                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">4</span>
                            <div>
                                <div className="fw-bold">Step 4: Register slices with the store</div>
                                <div className="small text-muted">Add slice reducers to the store reducer map.</div>
                            </div>
                        </div>

                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">5</span>
                            <div>
                                <div className="fw-bold">Step 5: Use <code>useSelector</code></div>
                                <div className="small text-muted">Read state from any component using <code>useSelector()</code>.</div>
                            </div>
                        </div>

                        <div className="list-group-item d-flex gap-3 align-items-start">
                            <span className="badge bg-primary rounded-circle fs-6">6</span>
                            <div>
                                <div className="fw-bold">Step 6: Update state with <code>useDispatch</code></div>
                                <div className="small text-muted">Dispatch actions to reducers using <code>useDispatch()</code>.</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="mb-1">Best tutorial for Setup: <Link to="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_blank" className="link-primary">whataboutcoding.com/redux-toolkit-tutorial</Link></p>
                        <p className="mb-0">Quick Start: <Link to="https://redux-toolkit.js.org/tutorials/quick-start" target="_blank" className="link-primary">redux-toolkit quick start</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConfiguration;