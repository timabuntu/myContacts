import PropTypes from 'prop-types';

import { ArrowUp } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <ArrowUp weight="bold" size={20} />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
