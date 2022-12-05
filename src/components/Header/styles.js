import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 74px;

  img {
    width: 80px;
  }
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    padding: 0 16px;

    outline: 0;

    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);

    &::placeholder{
      color: #bcbcbc
    }
  }
`;
