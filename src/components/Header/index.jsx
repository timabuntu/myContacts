import { Container, InputSearchContainer } from './styles';

import Logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" />
      <InputSearchContainer>
        <input type="text" placeholder="pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}

export default Header;
