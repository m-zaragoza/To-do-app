import axios from 'axios';
import { useState } from 'react';

const Login = ({ url }) => {

    const [loginUser, setLoginUser] = useState({
        user: ``,
        password: ``
    });

    const userHandler = e => {
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        postUser(loginUser);
    };

    const postUser = async loginUser => {
        try {
            const res = await axios.post(`${url}/login`, loginUser);
            alert(res.data.message);
            resetLoginUser();
        }
        catch (err) {
            alert(`Something went wrong: ${err.message}`);
            resetLoginUser();
        }
    };

    const resetLoginUser = () => setLoginUser({ user: ``, password: `` });
    return (
        <>
            <div className="row justify-content-md-center pb-5">
                <h1 className="col-md-auto display-6 pb-5">Welcome back</h1>
            </div>
            <div className="container w-50">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Your email</label>
                        <input id="emailAddress" type="email" className="form-control" name="user" value={loginUser.user} onChange={userHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Your password</label>
                        <input id="password" type="password" className="form-control" name="password" value={loginUser.password} onChange={userHandler} required />
                    </div>
                    <button type="submit" className="btn py-3 px-3">Log in</button>
                </form>
            </div></>
    );
};

export default Login;