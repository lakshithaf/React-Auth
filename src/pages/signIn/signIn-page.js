import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SignInUserForm from './components/forms/signInUser'
import SignInPwdForm from './components/forms/signInPwd'
import './signIn-page.scss'

function SignInPage(props) {
    const [loadPwdForm, setLoadPwdForm] = useState(false)
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [varifyStatus, setVarifyStatus] = useState(false)
    const [inputError, setInputError] = useState({
        "username": {
            status: false,
            error: "The username is not recognized"
        },
        "password":
        {
            status: false,
            error: "The password is wrong"
        }
    })

    const setUserNameHandler = (e) => {
        e.preventDefault()
        setUserName(e.target.value)
    }

    const setPasswordHandler = (e) => {
        e.preventDefault()
        setUserPassword(e.target.value)
    }

    const userNameSubmitHandler = (e, feildName) => {
        e.preventDefault();
        setVarifyStatus(true);
        setTimeout(async () => await submitSignIn(feildName, userName), 2000);
    }


    const passwordSubmitHandler = (e, feildName) => {
        e.preventDefault();
        setVarifyStatus(true);
        setTimeout(async () => await submitSignIn(feildName, userPassword), 2000);
    }

    const submitSignIn = async (feildName, userName) => {
        if (feildName === 'username') {
            const isUserNameValid = await checkUserName(userName)
            if(isUserNameValid){
                setLoadPwdForm(true);
                setVarifyStatus(false);
            } else {
                const mapedInputError = inputError["username"];
                mapedInputError.status = true;
                setVarifyStatus(false)
                setInputError({
                    ...inputError,
                    mapedInputError
                });
            }
           
        } 

        if(feildName === 'password'){
            const isPasswordalid = await checkUserPassword(userName)
            if(isPasswordalid){
                setVarifyStatus(false);
            } else {
                const mapedInputError = inputError["password"];
                mapedInputError.status = true;
                setVarifyStatus(false)
                setInputError({
                    ...inputError,
                    mapedInputError
                });
            }
        }
    
    }

    const checkUserName = async (userName) => {
        return true;
    }

    const checkUserPassword = async (password) => {
        return false;
    }

    return (
        <div className="signin-container">
            {!loadPwdForm &&
                <SignInUserForm
                    varifyUserStatus={varifyStatus}
                    value={userName}
                    onInputChange={(e) => setUserNameHandler(e)}
                    onSubmit={userNameSubmitHandler}
                    userValidationResult={inputError["username"]}
                />}
            {loadPwdForm && 
                 <SignInPwdForm 
                   validUserName={userName}
                   varifyPasswordStatus={varifyStatus} 
                   value={userPassword}
                   onInputChange={(e) => setPasswordHandler(e)}
                   onSubmit={passwordSubmitHandler}
                   userValidationResult={inputError["password"]}
                />}
        </div>
    )
}

SignInPage.propTypes = {

}

export default SignInPage

