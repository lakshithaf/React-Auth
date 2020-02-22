import React from 'react'
import PropTypes from 'prop-types'

function TextInput({ 
    inputId, 
    inputname,
    inputType, 
    inputValue, 
    inputFieldOnChnage, 
    inputLabel, 
    autoFocus,
    isValidField, 
    inputError }) {
    return (
        <div className="input-field-container">
            <label htmlFor={inputId} className="user-input-label">{inputLabel}</label>
            <input
                name={inputname}
                type={inputType}
                value={inputValue}
                onChange={inputFieldOnChnage}
                autoComplete="off"
                placeholder=""
                className={isValidField ? "form-control ds-input error" : "form-control ds-input"}
                id={inputId}
                spellCheck="false"
                maxLength="20"
                autoFocus= {autoFocus}/>
        {isValidField &&
            <div className="user-input-error"><span>{inputError}</span></div>}

        </div>
    )
}

TextInput.propTypes = {

}

export default TextInput

