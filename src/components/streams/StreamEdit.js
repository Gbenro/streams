import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamEdit extends React.Component {
  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id)
  }
  render () {
    if (!this.props.stream.title) {
      return <div>Loading </div>
    }
    return <div>{this.props.stream.title}</div>
  }
}

const mapStateToprops = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(
  mapStateToprops,
  { fetchStream }
)(StreamEdit)
