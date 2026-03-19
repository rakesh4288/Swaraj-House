import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const swaraj_navigate = useNavigate();
    const initialFormValues = {
        email: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = formValidation();
        if (isFormValid) {
            handleLogin();
            setFormValues(initialFormValues);
        } else {
            console.log('Unable to submit');
        }
    }

    const formValidation = () => {
        let currentErrors = {}
        if (formValues.email === '') {
            currentErrors.email = "User Email required !!"
        }

        if (formValues.password === '') {
            currentErrors.password = "User Password required !!"
        }

        setFormErrors(currentErrors);

        const errorsKeys = Object.keys(currentErrors);
        console.log('errorsKeys =', errorsKeys);
        if (errorsKeys.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const handleLogin = async() => {
        const loginUrl = "https://api.escuelajs.co/api/v1/auth/login";
        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });
            const result = await response.json();
            if (result.access_token) {
                localStorage.setItem("token", JSON.stringify(result.access_token));
                setFormValues({
                    userEmail: '',
                    userPassword: ''
                });
                console.log('Successfully Logged In');
                swaraj_navigate("/home");
            } else {
                console.log('result =', result);
            }
        }
        catch (error) {
            console.log('Not Able to Connect API =', error);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center pt-4 pb-4 loginBg">
            <div className="card p-4 shadow" style={{ width: '400px' }}>
                <h4 className="themeGradient pt-1 pb-1 text-center">
                    <span className="logoOrange">स्व</span><span className="logoWhite">रा</span><span className="logoGreen">ज</span>
                </h4>
                <h6 className="text-center mb-4">To view all pages First Login Here <i className="bi bi-box-arrow-in-right"></i></h6>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={formValues.email} aria-describedby="emailHelp" onChange={handleInput} />
                        {formErrors && (<div className="text-danger"> {formErrors.email} </div>)}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formValues.password} onChange={handleInput} />
                        {formErrors && (<div className="text-danger"> {formErrors.password} </div>)}
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>

                    <div className="mt-3 text-center">
                        <a href="https://fakeapi.platzi.com/en/rest/auth-jwt/" target="_blank" className="text-decoration-none">Get Free Token Link</a>
                    </div>

                    <hr />

                    <p className="mb-0">
                        Sample Login Details: <br />
                        User Name: john@mail.com <br />
                        Password: changeme
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;