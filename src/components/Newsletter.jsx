import { SendOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: solid 1px lightgray;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from yours favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
