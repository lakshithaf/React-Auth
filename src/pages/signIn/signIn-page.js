import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignInUserForm from './components/forms/signInUser'
import SignInPwdForm from './components/forms/signInPwd'
import './signIn-page.scss'



function SignInPage(props) {
    const [loadPwdForm, setLoadPwdFrom] = useState(false)
    const [userName, setUserName] = useState("")
    const [userNameError, setUserNameError] = useState({
        status: false,
        error: ""
    })


    const userNameSubmitHandler = (e) => {
        e.preventDefault();
        submitUserName(userName)
    }

    const setUserNameHandler = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    const submitUserName = async (userName) => {
        const isUserNameValid = await checkUserName(userName);
        if(isUserNameValid){
            setLoadPwdFrom(true);
        }else{
            setUserNameError({
                status: true,
                error: "The username is not recognized."
            })
        }
    }


    const checkUserName = async (userName) => {
       return false;
    }

    return (
        <div className="signin-container">
            {!loadPwdForm && 
            <SignInUserForm 
              value={userName}
              onUserInputChange = {(e) => setUserNameHandler(e)}
              onSubmit={(e) => userNameSubmitHandler(e)} 
              userValidationResult = {userNameError}
            />}
            {loadPwdForm && <SignInPwdForm validUserName={userName} />}
        </div>
    )
}

SignInPage.propTypes = {

}

export default SignInPage

