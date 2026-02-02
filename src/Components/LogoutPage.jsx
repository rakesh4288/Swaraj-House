import { useNavigate } from "react-router-dom";
import AppImages from "../assets";

const LogoutPage = () => {
    const navigate = useNavigate();
    const handleLoginAgain = () => {
        navigate("/login");
    }
    return (
        <div id="logout-page" className="d-flex justify-content-center align-items-center bg-light mt-2">
            <div className="card p-2 shadow text-center" style={{ maxWidth: '700px' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '2rem' }}></i>
                            <h4 className="card-title mt-3 text-success">Logged Out Successfully!</h4>
                            <p className="card-text text-muted">Thank you for using Swaraj House. <br/> You have been logged out.</p>
                            <button className="btn btn-primary btn-sm w-100" onClick={handleLoginAgain}>
                                Login Again
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={AppImages.rakesh_lalita} alt="Logout Image" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutPage;