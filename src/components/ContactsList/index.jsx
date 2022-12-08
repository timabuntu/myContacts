import { ArrowUp } from 'phosphor-react';

import { Container, Header, ListContainer } from './styles';

function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <ArrowUp />
          </button>
        </header>

      </ListContainer>

    </Container>
  );
}

export default ContactsList;
