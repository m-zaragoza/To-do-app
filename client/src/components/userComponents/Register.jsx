import axios from "axios";
import { useState } from "react";

const Register = ({ url }) => {

    const [user, setUser] = useState({
        user: ``,
        password: ``
    });

    const userHandler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        postUser(user);
    };

    const postUser = async user => {
        try {
            const res = await axios.post(`${url}/register`, user);
            alert(res.data.message);
            resetUser();
        }
        catch (err) {
            alert(`Something went wrong: ${err.message}`);
            resetUser();
        }
    };

    const resetUser = () => setUser({ user: ``, password: `` });

    return (
        <>
            <div className="row justify-content-md-center pb-5">
                <h1 className="col-md-auto display-6 pb-5">Register here</h1>
            </div>
            <div className="container w-50">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Your email</label>
                        <input id="emailAddress" type="email" className="form-control" name="user" value={user.user} onChange={userHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Choose a password</label>
                        <input id="password" type="password" className="form-control" name="password" value={user.password} onChange={userHandler} required />
                    </div>
                    <button type="submit" className="btn py-3 px-3">Create account</button>
                </form>
            </div></>
    )
};

export default Register;