import { ArrowUp, PencilSimple, TrashSimple } from 'phosphor-react';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder=" Pesquisar pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <ArrowUp weight="bold" size={20} />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Mello</strong>
              <small>instagram</small>
            </div>

            <span>thiagogv2@hotmail.com</span>
            <span>(15)9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <PencilSimple size={20} />
            </a>
            <button type="button">
              <TrashSimple size={20} />
            </button>
          </div>

        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Mello</strong>
              <small>instagram</small>
            </div>

            <span>thiagogv2@hotmail.com</span>
            <span>(15)9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <PencilSimple size={20} />
            </a>
            <button type="button">
              <TrashSimple size={20} />
            </button>
          </div>

        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Mello</strong>
              <small>instagram</small>
            </div>

            <span>thiagogv2@hotmail.com</span>
            <span>(15)9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <PencilSimple size={20} />
            </a>
            <button type="button">
              <TrashSimple size={20} />
            </button>
          </div>

        </Card>

      </ListContainer>

    </Container>
  );
}
