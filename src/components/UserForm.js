import React, { useState } from 'react';



const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const inputFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value === "") {
            setFirstNameError("")
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters.")
        } else {
            setFirstNameError("");
        }
    }

    const inputLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value === "") {
            setLastNameError("")
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters.")
        } else {
            setLastNameError("");
        }
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value === "") {
            setEmailError("")
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at 5 characters");
        } else {
            setEmailError("");
        }
    }

    const inputPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value === "") {
            setPasswordError("")
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    }

    const inputConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === "") {
            setConfirmPasswordError("")
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match.");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    }


    return (
        <div className='container mt-5'>
            <form onSubmit={createUser}>

                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }

                <div className='mb-2 form-control'>
                    <label>First Name: </label> <br></br>
                    <input type="text" onChange={inputFirstName} value={firstName} />
                    {
                        firstNameError ?
                            <p style={{ color: 'red' }}> {firstNameError}</p> :
                            ''
                    }
                </div>
                <div className='mb-2 form-control'>
                    <label>Last Name: </label> <br></br>
                    <input type="text" onChange={inputLastName} value={lastName} />
                    {
                        lastNameError ?
                            <p style={{ color: 'red' }}> {lastNameError}</p> :
                            ''
                    }
                </div>
                <div className='mb-2 form-control'>
                    <label>Email Address: </label> <br></br>
                    <input type="text" onChange={inputEmail} value={email} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}> {emailError}</p> :
                            ''
                    }
                </div>
                <div className='mb-2 form-control'>
                    <label>Password: </label> <br></br>
                    <input type="password" onChange={inputPassword} value={password} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}> {passwordError}</p> :
                            ''
                    }
                </div>
                <div className='mb-2 form-control'>
                    <label>Confirm Password: </label> <br></br>
                    <input type="password" onChange={inputConfirmPassword} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                            <p style={{ color: 'red' }}> {confirmPasswordError}</p> :
                            ''
                    }
                </div>
                <input type="submit" className="btn btn-success" value="Create User" />
            </form>
            <div className='mt-5'>
                <h2>Your Form Data: </h2>
                <p>First Name: <span className='text-danger'>{firstName}</span> </p>
                <p>Last Name: <span className='text-danger'>{lastName}</span></p>
                <p>Email: <span className='text-danger'>{email}</span></p>
                <p>Password: <span className='text-danger'>{password}</span></p>
                <p>Confirm Password: <span className='text-danger'>{confirmPassword}</span></p>
            </div>
        </div>
    );
};

export default UserForm;