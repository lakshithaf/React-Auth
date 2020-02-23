import React from 'react'
import PropTypes from 'prop-types'

function ButtonSubmit({ labelName, customClassName, id, type, action }) {
    return (
        <div className={ `button-container ${customClassName}`} >
            <button 
                type="button" 
                className="btn btn-primary" 
                id={id}
                type={type}
                onClick={type !== 'submit' && action}>{ labelName }
            </button>
        </div>
    )
}

ButtonSubmit.propTypes = {

}

export default ButtonSubmit

