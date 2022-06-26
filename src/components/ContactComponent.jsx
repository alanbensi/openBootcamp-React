import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './archivosJS/claseContacto'
import StateUser from './StateUser'

const ContactComponent = ( { Contacto } ) => {
  return (
    <div>
        <h2>Name: {Contacto.name}</h2>
        <p>Surname: {Contacto.surname}</p>
        <p>Email: {Contacto.email}</p>
        <StateUser/>
    </div>
  )
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf (Contacto)
}

export default ContactComponent