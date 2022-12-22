import { Container } from './styles';

import Logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" />
    </Container>
  );
}

export default Header;
