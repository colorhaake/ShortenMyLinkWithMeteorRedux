import React, { Component } from 'react'

const renderRow = ({url, token, clicks}) => {
  const shortenLink = `http://localhost:3000/${token}`
  return (
    <tr key={token}>
      <td><a href={url}>{url}</a></td>
      <td><a href={shortenLink}>{shortenLink}</a></td>
      <td>{clicks}</td>
    </tr>
  )
}

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  componentDidMount() {
    this.state.viewReady()
  }

  // TODO try not to handle setState myself
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  render() {
    const {links = []} = this.state
    return (
      <div>
        <h2>Shoten History</h2>
        <table>
          <tbody>
            <tr>
              <th>Original URL</th>
              <th>Shorened URL</th>
              <th>Number of Clicks</th>
            </tr>
            {links.map(renderRow)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Content
