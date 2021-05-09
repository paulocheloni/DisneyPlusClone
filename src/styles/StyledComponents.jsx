import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  justify-content: space-between;
  display:flex;
  padding: 0 20px;
  overflow-x: none;
  width: 100%;
  position: absolute;
  outline: none;
  z-index: 2;
  background-color: rgba(0,0,0,0.4);
  hover: {
    background-color: rgba(0,0,0,0.8)
  }
`

export const Logo = styled.img`
  width: 80px;
  padding: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  color: #ccc;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  font-weight: 1000;
  border-radius: 2px;
  transition: ease-in-out .4s;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`

export const NavMenu = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 20px;

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
