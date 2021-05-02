import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
      <Logo src ="/images/logo.svg"/>
      <NavMenu>
        <Button>entrar</Button>
      </NavMenu>
    </Nav>      
  )
}

export default Header

const Nav = styled.nav`

  align-items: center;
  justify-content: space-between;
  display:flex;
  height: 70px;
  overflow-x: none;
  width: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.3);

`

const Logo = styled.img`
  width: 80px;
  padding: 10px;
`

const Button = styled.button`
  width: 80px;
  background-color: transparent;
  color: #ccc;
  cursor: pointer;
  background: rgba(0,0,0,0.3);
  padding: 10px 0;
  border: none;
  font-weight: 600;
  border-radius: 2px;
  transition: ease-in-out .4s;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`

const NavMenu = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 10px;

  button:hover {
    background-color: white;
    color: black;
    transition: ease-in-out .4s
  }

  a {
    display: flex;
    width: 50px;;

  }
  span {
    width: 50px;
  }
`