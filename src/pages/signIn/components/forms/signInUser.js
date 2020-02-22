import React from 'react'
import PropTypes from 'prop-types'
import SignUpLink from '../../../../components/Links/SignUpLink'
import SubmitButton from '../../../../components/Buttons/ButtonSubmit'
import TextInput from '../../../../components/InputFields/TextInput'

function SignInUser({
    value,
    varifyUserStatus,
    onInputChange,
    onSubmit,
    userValidationResult
}) {
    return (
        <div className="signin-user-form">
            <span className="header">Sign In</span>
            <form >
                <TextInput
                    inputId={'user-input-field'}
                    inputType={'text'}
                    inputValue={value}
                    inputFieldOnChnage={onInputChange}
                    inputLabel={'Username'}
                    isValidField={userValidationResult.status}
                    inputError={userValidationResult.error}
                    autoFocus={true}
                />
                <SubmitButton
                    labelName={varifyUserStatus ? "Verifying" : "Next"}
                    customClassName="sign-in-btn"
                    action={(e) => onSubmit(e, 'username')} />
            </form >
            <SignUpLink />
        </div>
    )
}

SignInUser.propTypes = {

}

export default SignInUser

