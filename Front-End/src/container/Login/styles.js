import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const ContainerLeft = styled.div`
  width: 58vw;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
  }
`
export const ContainerMain = styled.div`
  background: #373737;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  padding: 13%;
  img {
    width: 49%;
    height: 20%;
    margin-bottom: 20%;
    margin-left: 21%;
  }
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-left: 36%;
    color: white;
  }
`
export const P = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6%;
  margin-bottom: 1%;

  color: #ffffff;
`

export const Inputs = styled.input`
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  outline: none;
  height: 30px;
  width: 85%;
  padding-left: 8px;
`

export const Button = styled.button`
  background: #9758a6;
  border-radius: 20px;
  border: none;
  width: 35%;
  height: 32.13px;
  margin-top: 12%;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`

export const SignupLInk = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 7%;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration-line: underline;
    margin-left: 5px;
  }
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 3.5px;

  color: #cc1717;
`
