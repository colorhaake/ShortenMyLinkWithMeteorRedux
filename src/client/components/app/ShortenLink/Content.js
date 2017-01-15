import React, { Component } from 'react'
import '../style/index.css'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  handleClick() {
  // TODO try not to use refs
    this.state.onClick(this.refs.input.value)
  }

  // TODO try not to handle setState myself
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  render() {
    const errorMsg = this.state.error
     ? 'Not Valid URL'
     : ''

    return (
      <div className="container">
        <h2 className="title">{this.state.title}</h2>
        <input
          ref="input"
          className="input"
          type="text"
          placeholder="http://longlonglongaddress.com"/>
        <h3 className="error">{errorMsg}</h3>
        <button
          className="submit"
          type="button"
          onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Content
