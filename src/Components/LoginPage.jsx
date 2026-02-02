import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const swaraj_navigate = useNavigate();
    const initialFormValues = {
        email: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialFormValues);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                // console.log('result =', result);
                localStorage.setItem("token", JSON.stringify(result.access_token));
                setFormValues({
                    email: '',
                    password: ''
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

    useEffect(() => { }, []);

    // console.log('form Values =', formValues);
    return (
        <div className="d-flex justify-content-center align-items-center pt-5 bg-light">
            <div className="card p-4 shadow" style={{ width: '400px' }}>
                <h5 className="text-center mb-4">To view all the pages First Login Here</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={formValues.email} aria-describedby="emailHelp" onChange={handleInput} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formValues.password} onChange={handleInput} />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                    <div className="mt-3 text-center">
                        <a href="https://fakeapi.platzi.com/en/rest/auth-jwt/" target="_blank" className="text-decoration-none">Free Token Link</a>
                    </div>

                    <hr/>
                    <p>
                        User Name: john@mail.com
                        <br />
                        Password: changeme
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;