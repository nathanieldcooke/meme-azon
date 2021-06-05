import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { demoSignUp } from '../../store/session';

const DemoSignUpForm = () => {
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    let initEmail = `demo-user${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}@random.com`
    let initFirstName = `demo-user${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}`
    let initLastName = `demo-user${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}`
    let initPasswodAndConfirm = "1234abcd"

    function getRandNumBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailArr, setEmailArr] = useState(initEmail.split(''));
    const [firstnameArr, setFirstnameArr] = useState(initFirstName.split(''));
    const [lastnameArr, setLastnameArr] = useState(initLastName.split(''));
    const [passwordArr, setPasswordArr] = useState(initPasswodAndConfirm.split(''));
    const [confirmPasswordArr, setConfirmPasswordArr] = useState(initPasswodAndConfirm.split(''));

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async () => {
        // e.preventDefault();
        if (password === confirmPassword) {
            await dispatch(demoSignUp(firstname, lastname, email, password));
        }
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const updateFunc = async () => {
        await sleep(50)
        if (emailArr.length) {
            setEmail(email + emailArr[0])
            setEmailArr(emailArr.slice(1, emailArr.length))
        } else if (firstnameArr.length) {
            setFirstname(firstname + firstnameArr[0])
            setFirstnameArr(firstnameArr.slice(1, firstnameArr.length))
        } else if (lastnameArr.length) {
            setLastname(firstname + lastnameArr[0])
            setLastnameArr(lastnameArr.slice(1, lastnameArr.length))
        } else if (passwordArr.length) {
            setPassword(password + passwordArr[0])
            setPasswordArr(passwordArr.slice(1, passwordArr.length))
        } else if (confirmPasswordArr.length) {
            setConfirmPassword(confirmPassword + confirmPasswordArr[0])
            setConfirmPasswordArr(confirmPasswordArr.slice(1, confirmPasswordArr.length))
        } else {
            onSignUp()
        }
    }

    useEffect(() => {
        updateFunc()
    }, [emailArr, firstnameArr, lastnameArr, passwordArr, confirmPasswordArr])


    // const updateFirstname = (e) => {
    //     setFirstname(e.target.value);
    // };

    // const updateLastname = (e) => {
    //     setLastname(e.target.value);
    // };

    // const updateEmail = (e) => {
    //     setEmail(e.target.value);
    // };

    // const updatePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    // const updateConfirmPassword = (e) => {
    //     setConfirmPassword(e.target.value);
    // };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <div className='main-form'>
            <form onSubmit={onSignUp}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                    ></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                    ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    ></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required={true}
                    ></input>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default DemoSignUpForm;