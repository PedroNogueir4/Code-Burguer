import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: 38%;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  p {
    font-size: 17px;
    color: #9a9a9d;
  }
  border-bottom: 1px solid #9a9a9d;
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  grid-gap: 10px 30px;

  img {
    width: 104%;
    border-radius: 10px;
  }
  p {
    font-size: 16px;
  }
`
export const EmptyCart = styled.p`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`
