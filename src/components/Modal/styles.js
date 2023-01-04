import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0 /* não é right 0 sua mula 🐴 */;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;

  background: #fff;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger
      ? theme.colors.danger.main
      : theme.colors.gray[900])};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  .btn-cancel {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
