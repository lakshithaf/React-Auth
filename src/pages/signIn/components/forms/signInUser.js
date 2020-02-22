import React from 'react'
import PropTypes from 'prop-types'
import SignUpLink from '../../../../components/Links/SignUpLink'
import SubmitButton from '../../../../components/Buttons/ButtonSubmit'
import TextInput from '../../../../components/InputFields/TextInput'

function SignInUser({ value, onUserInputChange, onSubmit, userValidationResult }) {
    return (
        <div className="signin-user-form">
            <span className="header">Sign In</span>
            <TextInput 
               inputId={'user-input-field'}
               inputType={'text'}
               inputValue={value}
               inputFieldOnChnage={onUserInputChange}
               inputLabel={'Username'}
               isValidField={ userValidationResult.status }
               inputError={ userValidationResult.error}
               />
            <SubmitButton labelName="Next" customClassName="sign-in-btn" action={onSubmit} />
            <SignUpLink />
        </div>
    )
}

SignInUser.propTypes = {

}

export default SignInUser

