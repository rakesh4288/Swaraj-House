import { useEffect, useState } from "react";

const UserProfile = () => {
    const [userData, setUserData] = useState('');
    const profileUrl = "https://api.escuelajs.co/api/v1/auth/profile";
    const currentToken = JSON.parse(localStorage.getItem('token'));
    // console.log('currentToken =', currentToken);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(profileUrl, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${currentToken}`
                    }
                });
                const result = await response.json();
                // console.log('user result length =', Object.keys(result));
                if (Object.keys(result).length > 0) {
                    setUserData(result);
                }
            }
            catch (error) {
                console.log('Not Able to Connect User Profile =', error);
            }
        };
        fetchUser();
    }, [currentToken]);
    return (
        <div id="user-profile">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> User Profile </h4>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        {userData && (
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{userData?.name}</td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td>{userData?.email}</td>
                                    </tr>

                                    <tr>
                                        <td>Passwprd</td>
                                        <td>{userData?.password}</td>
                                    </tr>

                                    <tr>
                                        <td>Role</td>
                                        <td>{userData?.role}</td>
                                    </tr>

                                    <tr>
                                        <td>Avatar</td>
                                        <td>
                                            <img src={userData?.avatar} alt={userData?.avatar} width="100px" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;