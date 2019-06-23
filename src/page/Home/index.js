import React, { Component } from 'react';
import Header from '../../components/Header';
import Services from '../../services';
import Form from './Form';
import Results from './Results';
import './Home.css';

class Home extends Component {
  state = {
    results: [],
    searchText: '',
  };

  searchFactsRandom = async () => {
    const res = await Services.getRandom();
    this.setState({ results: [res] });
  };

  searchFactsByText = async (searchText) => {
    const res = await Services.getByQuery(searchText);
    this.setState({ results: res.result, searchText });
  };

  render() {
    const { results, searchText } = this.state;
    return (
      <div className="home">
        <Header />
        <Form
          searchFactsByText={this.searchFactsByText}
          searchFactsRandom={this.searchFactsRandom}
        />
        <Results items={results} searchText={searchText} />
      </div>
    );
  }
}

export default Home;
