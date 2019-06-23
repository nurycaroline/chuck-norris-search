import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const getValueInput = () => document.getElementById('inputsearch').value;

const Form = ({ searchFactsByText = () => {}, searchFactsRandom = () => {} }) => (
  <div className="form">
    <input
      id="inputsearch"
      placeholder="Pesquise aqui"
      type="text"
      onKeyPress={e => (e.keyCode === '13' || e.which === 13 ? searchFactsByText(getValueInput()) : '')
      }
    />
    <Button label="Pesquisa Fatos" onClick={() => searchFactsByText(getValueInput())} />
    <Button label="Estou com sorte" onClick={searchFactsRandom} />
  </div>
);

Form.protoTypes = {
  searchFactsByText: PropTypes.function,
  searchFactsRandom: PropTypes.function,
};

export default Form;
