import React from 'react'
import PropTypes from 'prop-types'

function ButtonSubmit({ labelName, customClassName, id, action }) {
    return (
        <div className={ `button-container ${customClassName}`} >
            <button type="button" className="btn btn-primary" onClick={action}>{ labelName }</button>
        </div>
    )
}

ButtonSubmit.propTypes = {

}

export default ButtonSubmit

