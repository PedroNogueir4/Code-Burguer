import React from 'react'
import { PropTypes } from 'prop-types'

import { ButtonContainer } from './styles'

function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
