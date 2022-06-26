import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './archivosJS/claseContacto'

const StateUser = ( { Contacto } ) => {
  return (
    <>
        <p>State: {Contacto.conected ? "Contact online" : "Contact offline" }</p>
    </>
  )
}

StateUser.propTypes = {
    Contacto: PropTypes.instanceOf (Contacto)
}

export default StateUser