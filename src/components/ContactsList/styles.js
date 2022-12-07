import styled from 'styled-components';

export const Container = styled.div`
margin-top: 32px;
`;

export const Header = styled.header`
display: flex;
text-align: center;
justify-content: space-between;

strong{
  display: flex;
  align-items: center;
  color: #222;
  font-size: 24px;
}

a{
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.1s ease-in;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.lighter}
  }
}
`;
