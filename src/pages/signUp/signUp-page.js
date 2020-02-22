import React from 'react';
import PropTypes from 'prop-types';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit'

function SignUpPage(props) {
    return (
        <div className="signup-container">
            <h1>Auth page</h1>
            <ButtonSubmit labelName={"create"}/>
        </div>
    )
}

SignUpPage.propTypes = {

}

export default SignUpPage;

