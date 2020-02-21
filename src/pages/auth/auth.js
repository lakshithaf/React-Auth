import React from 'react';
import PropTypes from 'prop-types';

import ButtonSubmit from '../../components/Buttons/ButtonSubmit'

function AuthPage(props) {
    return (
        <div className="auth-container">
            <h1>Auth page</h1>
            <ButtonSubmit labelName={"create"}/>
        </div>
    )
}

AuthPage.propTypes = {

}

export default AuthPage;

