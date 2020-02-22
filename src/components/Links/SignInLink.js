import React from 'react'
import PropTypes from 'prop-types'

import './Links.scss'

function SignInLink(props) {
    return (
        <div className="sign-in-link-container">
               <span className="sign-in-message">Already have an account?</span>
               <span className="sign-in-link"><a href="/">Sign in</a></span>
        </div>
    )
}

SignInLink.propTypes = {

}

export default SignInLink

