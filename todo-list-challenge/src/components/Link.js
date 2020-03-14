import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

//componente que será ultilizado no footer

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
    size="small"
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link