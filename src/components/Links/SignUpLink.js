import React from 'react'
import PropTypes from 'prop-types'

import './Links.scss'

function SignUpLink(props) {
    return (
        <div className="sign-up-link-container">
               <span className="sign-up-message">New to Autodesk?</span>
               <span className="sign-up-link"><a href="/register">Create Account</a></span>
        </div>
    )
}

SignUpLink.propTypes = {

}

export default SignUpLink

