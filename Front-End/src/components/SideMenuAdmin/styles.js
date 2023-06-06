import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 17%;
`
export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1% 3%;
  gap: 16px;
  margin-top: 30%;
  hr {
    margin: 20px 8px;
  }
`
export const Button = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 13px;
  text-decoration: none;
  background: #3c3c3c;
  border-radius: 2px;
  border: none;
  height: 37px;
  width: 100%;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background: #565656;
  }
  &:active {
    opacity: 0.6;
  }
`
