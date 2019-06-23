import React from 'react';
import PropTypes from 'prop-types';
import HhighlightText from '../../helpers/highlightText';

const Results = ({ items = [], searchText = '' }) => (
  <ul className="results">
    {items && items.length > 0 && typeof items === 'object'
      ? items.map(joke => <CardResult key={joke.value} joke={joke} searchText={searchText} />)
      : items}
  </ul>
);

const CardResult = ({ joke = {}, searchText = '' }) => (
  <li className="card-result">
    {HhighlightText(joke.value, searchText)}
    <br />
    {joke.categories
      && joke.categories.length > 0
      && joke.categories.map(c => <span className="categories">{c}</span>)}
  </li>
);

Results.protoTypes = {
  items: PropTypes.arrayOf,
  searchText: PropTypes.string,
};

export default Results;
