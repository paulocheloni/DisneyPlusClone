import React from 'react'
import styled from 'styled-components'
import { Row, Col } from '@bootstrap-styled/v4'
import Container from '@bootstrap-styled/v4/lib/Container'

function MainSection() {

  return (
    <Content>
      <Background />
      <Container  style={{height: '100vh'}}>
        <Wrapper className="d-flex flex-column h-75 w-75 justify-content-between ">
          <Info >
            <div>
              <img src="/images/logo-nopad.svg" style={{ maxWidth: 200 }} alt="logos" />
              <h2 className="font-weight-bold text-left my-4 w-50">As melhores histórias em um só lugar</h2>
            </div>
            <Row className="w-100">
              <Col className="d-flex align-items-start flex-column justify-content-between">
                <h3 className="font-weight-bold">R$27,90
            <small
                    className="text-secondary text-size"
                    style={{ fontSize: '12px' }}
                  >
                    / mes *
                 </small>
                </h3>
                <Button size="lg" className="w-100  font-weight-bold">Assine agora</Button>
              </Col>
              <Col className="d-flex align-items-start flex-column justify-content-between">
                <h3 className="font-weight-bold w-75">De R$334 por R$279,90
                <small
                    className="text-secondary text-size"
                    style={{fontSize: '12px'  }}
                  >
                    / ano *
                 </small>
                </h3>
                <Button size="lg" className="w-100 font-weight-bold" >Assine agora</Button>
              </Col>
            </Row>
            <Row>
              <Legend style={{fontSize: '12px', fontWeight: 700, color: '#ccc'}}>*Preço mensal: R$ 27,90. Preço anual: R$ 279,90 à vista. Encargos e impostos podem ser aplicáveis.</Legend>
            </Row>
          </Info>
          <Row>
            <Col>
              <img src="/images/cta-logo-two.png" style={{ maxWidth: '100%', padding: 10 }} alt="logos" />
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </Content>
  )
}

const Background = styled.img`
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgb(0,0,10)
`

const Legend = styled.small`
  ${(props) => `
    font-size: 10px;
    margin-left: 5px;
    margin-top: 10px;
    z-index: 2;
  `}:
`

const Wrapper = styled.div`
  margin-top: 180px;
`



const Button = styled.button`
  ${(props) => `
     background-color: ${props.theme['$btn-primary-bg']};
     color: ${props.theme['$btn-primary-color']};
     font-size: 1em;
     font-weight: 1000;
     text-transform: uppercase;
     border-color: transparent;
     border-radius: .20em;
     padding: 15px 30px;
  `};
`;




const Content = styled.div`
  width: 100vw;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  
  min-height: 100vh;
`

const Info = styled.div`

  
  color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;

`



export default MainSection
