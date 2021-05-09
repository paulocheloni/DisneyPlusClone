import React from 'react'
import {Nav, Logo, NavMenu, Button} from '../styles/StyledComponents'
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" className="p-0"/>
      <NavMenu>
        <Button style={{fontWeight: 'bolder'}}>entrar</Button>
      </NavMenu>
    </Nav>
  )
}



export default Header

