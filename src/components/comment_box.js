import React, { Component } from 'react';
import { sendComment } from '../actions';
import { connect } from 'react-redux';

class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = { comment: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendComment(this.state.comment);
    this.setState({ comment: ''});
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <div>
          <button action="submit" className="btn btn-secondary">Add comment</button>
        </div>
      </form>
    );
  };
}

export default connect(null, { sendComment })(CommentBox);
