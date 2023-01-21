import { useState } from 'react';

export default function useErrors() {
  // Cria um estado chamado "errors" com um array vazio
  const [errors, setErrors] = useState([]);

  // Adiciona um erro ao estado "errors"
  function setError({ field, message }) {
    // Verifica se o erro já existe no estado "errors"
    const errorAlreadyExists = errors.find((error) => error.field === field);

    // Se o erro já existir, não adiciona novamente
    if (errorAlreadyExists) {
      return;
    }

    // Adiciona o novo erro ao estado "errors"
    setErrors((oldState) => [
      ...oldState, { field, message },
    ]);
  }

  // Remove um erro específico do estado "errors"
  function removeError(fieldName) {
    setErrors((oldState) => oldState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  // Retorna a mensagem de erro de um campo específico
  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  // Retorna as funções "setError", "removeError"
  // e "getErrorMessageByFieldName" para serem usadas fora desta função
  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
