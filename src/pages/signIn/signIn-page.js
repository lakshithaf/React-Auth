import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SignInUserForm from './components/forms/signInUser'
import SignInPwdForm from './components/forms/signInPwd'
import { useToast } from '../../components/Toast'
import './signIn-page.scss'

function SignInPage(props) {
    const toast = useToast();
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


    useEffect(() => {
        const userState = props.history.location.state;
        if (props.history.location.state && Object.keys(userState).length > 0 && userState.username) {
            setUserName(userState.username)
            let state = { ...props.history.location.state };
            delete state.username;
            props.history.replace({ ...props.history.location, state })
            toast.add('Account created successfully')
        }
    });

    const setInputHandler = (e) => {
        e.preventDefault()
        const inputFeild = e.target.id
        const inputFeildError = inputError
        if (inputFeild === 'username') {
            setUserName(e.target.value)
        }

        if (inputFeild === 'password') {
            setUserPassword(e.target.value)
        }

        inputFeildError[inputFeild]["status"] = false
    }

    const userNameSubmitHandler = (e, feildName) => {
        e.preventDefault()
        setVarifyStatus(true)
        setTimeout(async () => await submitSignIn(feildName, userName), 2000)
    }

    const passwordSubmitHandler = (e, feildName) => {
        e.preventDefault()
        setVarifyStatus(true)
        setTimeout(async () => await submitSignIn(feildName, userPassword), 2000)
    }

    const submitSignIn = async (feildName, userName) => {
        if (feildName === 'username') {
            const isUserNameValid = await checkUserName(userName)
            if (isUserNameValid) {
                setLoadPwdForm(true)
                setVarifyStatus(false)
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

        if (feildName === 'password') {
            const isPasswordalid = await checkUserPassword(userName)
            if (isPasswordalid) {
                setVarifyStatus(false)
            } else {
                const mapedInputError = inputError["password"]
                mapedInputError.status = true
                setVarifyStatus(false)
                setInputError({
                    ...inputError,
                    mapedInputError
                });
            }
        }

    }

    const checkUserName = async (userName) => {
        if (userName) {
            return true
        } else {
            return false
        }
    }

    const checkUserPassword = async (password) => {
        return false
    }

    const redirectToUserForm = (e) => {
        e.preventDefault()
        setLoadPwdForm(false)
    }

    return (
        <div className="signin-container">
            {!loadPwdForm &&
                <SignInUserForm
                    varifyUserStatus={varifyStatus}
                    value={userName}
                    onInputChange={(e) => setInputHandler(e)}
                    onSubmit={userNameSubmitHandler}
                    userValidationResult={inputError["username"]}
                />}
            {loadPwdForm &&

                <SignInPwdForm
                    validUserName={userName}
                    varifyPasswordStatus={varifyStatus}
                    value={userPassword}
                    onInputChange={(e) => setInputHandler(e)}
                    onSubmit={passwordSubmitHandler}
                    userValidationResult={inputError["password"]}
                    redirectToUserForm={redirectToUserForm}
                />}
        </div>
    )
}

SignInPage.propTypes = {

}

export default SignInPage

