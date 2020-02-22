import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './components/forms/signUp'
import './signUp-page.scss'

function SignUpPage(props) {
    const [loadPwdForm, setLoadPwdForm] = useState(false)
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        rusername: "",
        password: "",
        rpassword: ""
    })
    const [formIsValid, setFormIsValid] = useState(false)
    const [varifyStatus, setVarifyStatus] = useState(false)
    const [inputError, setInputError] = useState({
        "firstname": {
            status: false,
            error: ""
        },
        "lastname": {
            status: false,
            error: ""
        },
        "username": {
            status: false,
            error: ""
        },
        "rusername": {
            status: false,
            error: ""
        },
        "password":
        {
            status: false,
            error: ""
        },
        "rpassword":
        {
            status: false,
            error: ""
        },

    })

    const inputChangeHandler = (e) => {
        e.preventDefault()
        const inputField = e.target.id.split('-')[0]
        const userDataObj = {}
        userData[inputField] = e.target.value
        setUserData({ ...userData, userDataObj })
    }

    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        if (validateForm()) {
            return true;
        }
    }

    const validateForm = () => {
        let fields = userData
        let errors = inputError
        setFormIsValid(true)

        if (!fields["firstname"]) {
            setFormIsValid(false)
            errors["firstname"]["status"] = true
            errors["firstname"]["error"] = "Please enter your first name"
        }

        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                setFormIsValid(false)
                errors["firstname"]["status"] = true
                errors["firstname"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["lastname"]) {
            setFormIsValid(false)
            errors["lastname"]["status"] = true
            errors["lastname"]["error"] = "Please enter your last name"
        }

        if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
                setFormIsValid(false)
                errors["lastname"]["status"] = true
                errors["lastname"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["username"]) {
            setFormIsValid(false)
            errors["username"]["status"] = true
            errors["username"]["error"] = "Please enter your username"
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                setFormIsValid(false)
                errors["username"]["status"] = true
                errors["username"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["rusername"]) {
            setFormIsValid(false)
            errors["rusername"]["status"] = true
            errors["rusername"]["error"] = "Please enter your username"
        }

        if (typeof fields["rusername"] !== "undefined") {
            if (!fields["rusername"].match(/^[a-zA-Z ]*$/)) {
                setFormIsValid(false)
                errors["rusername"]["status"] = true
                errors["rusername"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["password"]) {
            setFormIsValid(false)
            errors["password"]["status"] = true
            errors["password"]["error"] = "Please enter your password"
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                setFormIsValid(false)
                errors["password"]["status"] = true
                errors["password"]["error"] = "Please enter secure and strong password"
            }
        }

        if (!fields["rpassword"]) {
            setFormIsValid(false)
            errors["rpassword"]["status"] = true
            errors["rpassword"]["error"] = "Please enter your password"
        }

        if (typeof fields["rpassword"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                setFormIsValid(false)
                errors["rpassword"]["status"] = true
                errors["rpassword"]["error"] = "Please enter secure and strong password"
            }
        }

        setInputError({ ...inputError, errors })
        return formIsValid;
    }

    return (
        <div className="signup-container">
            <SignUpForm
                value={userData}
                onInputChange={(e) => inputChangeHandler(e)}
                onSubmit={signUpSubmitHandler}
                formValidationResult={inputError}
            />
        </div>
    )
}

SignUpPage.propTypes = {

}

export default SignUpPage;

