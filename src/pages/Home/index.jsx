import { Link } from 'react-router-dom';

import { ArrowUp, PencilSimple, TrashSimple } from 'phosphor-react';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal danger /> */}

      <InputSearchContainer>
        <input type="text" placeholder=" Pesquisar pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/123">
              <PencilSimple size={20} alt="Edit" />
            </Link>
            <button type="button">
              <TrashSimple size={20} alt="Delete" />
            </button>
          </div>

        </Card>

      </ListContainer>

    </Container>
  );
}

fetch('http://localhost:3000/contacts', {
  method: 'DELETE',
  headers: new Headers({
    'X-App-ID': '123',
  }),
})
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('erro', error);
  });

// SOP -> Same Origin Policy -> Política de Mesma Origem
// CORS -> Cross Origin Resource Sharing -> Compartilhamento de Recursos entre Origens Diferentes

// Origem: protocolo + domínio + porta

// Saída: http://localhost:5173
// Destino: http://localhost:3000

// Preflight -> Pré-voo
// OPTIONS -> http://localhost:3000/contacts
