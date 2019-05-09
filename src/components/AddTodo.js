import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {
  state = {
    title: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={inputStyle}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className="btn"
          type="submit"
          value="Submit"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
const formStyle = {
  width: '60%',
  display: 'flex',
  margin: '16px auto'
};

const inputStyle = { flex: '10', padding: '5px' };

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
