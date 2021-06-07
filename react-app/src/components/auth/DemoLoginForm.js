import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'

const DemoLoginForm = () => {
    let initEmail = `demo@demo-mail.com`
    let initPasswodAndConfirm = "password54321!"

    // function getRandNumBetween(min, max) {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const [emailArr, setEmailArr] = useState(initEmail.split(''));
    const [passwordArr, setPasswordArr] = useState(initPasswodAndConfirm.split(''));

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        // e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data.errors) {
            setErrors(data.errors);
        }
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    useEffect(() => {
        const updateFunc = async () => {
            await sleep(50)
            if (emailArr.length) {
                setEmail(email => email + emailArr[0])
                setEmailArr(emailArr.slice(1, emailArr.length))
            } else if (passwordArr.length) {
                setPassword(password => password + passwordArr[0])
                setPasswordArr(passwordArr.slice(1, passwordArr.length))
            } else {
                onLogin()
            }
        }
        updateFunc()
    }, [emailArr, passwordArr])

    if (user) {
        return <Redirect to="/shop" />;
    }

    return (
        <div className='main-form'>

            <form onSubmit={onLogin}>
                <div>
                    {errors.map((error, idx) => (
                        <div key={`err-${idx}`}>{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={() => {}} // voids warning from react, dont need for auto-fill
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={() => {}} // voids warning from react, dont need for auto-fill
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default DemoLoginForm;
