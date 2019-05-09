import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return { 
      background: '#f4f4f4',
      width: '60%',
      padding: '10px',
      margin: '5px auto' ,
      
     
    //   borderBottom: '1px #ccc dotted',
      boxShadow: '0 2px 3px green',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      
    };
  };
  markComplete = e => {};

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />{' '}
          {this.props.todo.title}
          <button
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

//Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
