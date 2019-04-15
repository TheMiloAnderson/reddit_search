import React, { Component } from 'react';
import './App.css';
import SearchForm from './searchForm'
import SearchResultList from './searchResultList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      promptSearch: true
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchResults) {
    this.setState({
      results: searchResults,
      promptSearch: false
    })
  }

  render() {
    return (
      <div className="App">

        <SearchForm onSearch={this.handleSearch} />
        <SearchResultList items={this.state.results} />
      </div>
    );
  }
}

export default App;
