import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span,
    svg {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
    svg {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }
  h1 {
    font-size: 24px;
  }
`;
