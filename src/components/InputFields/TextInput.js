import React from 'react'
import PropTypes from 'prop-types'

function TextInput({ 
    inputId, 
    inputType, 
    inputValue, 
    inputFieldOnChnage, 
    inputLabel, 
    isValidField, 
    inputError }) {
    return (
        <div className="input-field-container">
            <span className="user-input-label">{inputLabel}</span>
            <input
                type={inputType}
                value={inputValue}
                onChange={inputFieldOnChnage}
                autoComplete="off"
                placeholder=""
                className={isValidField ? "form-control ds-input error" : "form-control ds-input"}
                id={inputId}
                spellCheck="false"
                maxLength="20"
                autoFocus />
        {isValidField &&
            <div className="user-input-error"><span>{inputError}</span></div>}

        </div>
    )
}

TextInput.propTypes = {

}

export default TextInput

