import React from 'react'
import PropTypes from 'prop-types'
import SubmitButton from '../../../../components/Buttons/ButtonSubmit'
import TextInput from '../../../../components/InputFields/TextInput'

function SignInPwd({ validUserName, value, onUserInputChange, userValidationResult }) {
    return (
        <div className="signin-user-form">
            <span className="header">Welcome</span>
            <span className="user-name">{ validUserName }</span>
           <TextInput 
               inputId={'password-input-field'}
               inputType={'password'}
               inputValue={value}
               inputFieldOnChnage={onUserInputChange}
               inputLabel={'Password'}
               isValidField={ userValidationResult.status }
               inputError={ userValidationResult.error}
               />
           <SubmitButton labelName="Sign In" customClassName="sign-in-btn"/>
        </div>
    )
}

SignInPwd.propTypes = {

}

export default SignInPwd

