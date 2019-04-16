import React, { Component } from 'react'
import superagent from 'superagent'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      page: 0,
      errorClass: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = `https://www.reddit.com/r/${this.state.searchName}.json?limit=${this.state.page}`;

    superagent.get(url)
    .then(res => {
        this.setState({errorClass: ''})
        this.props.onSearch(res.body.data.children);
    })
    .catch(error => {
        console.error(error);
        this.setState({errorClass: 'search-error'})
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="reddit-search">
        <form className={this.state.errorClass} onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleChange}/>

          <input
            type="number"
            name="page"
            value={this.state.page}
            onChange={this.handleChange}/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm