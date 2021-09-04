import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
    };

    this.handleChangeDone = this.handleChangeDone.bind(this);
  }

  myMethod() {
    this.setState((previousState) => {
      console.log('previous state ' + this.state.isDone)
      return { isDone: 'got er done' }
    });
  }

  renderTitle() {
    return (
        <h4>Task: {this.props.title}</h4>
    );
  }

  handleChangeDone() {
    this.myMethod();
    this.setState((previousState) => {
      const newState = { 
        isDone: 'got er done',
      }
      console.log(newState.isDone);
      return newState;
  })
  }

  render() {
    const { content } = this.props;

    return (
      <div> 
        {this.renderTitle()}
        <p>{content}</p>
        <div>
        <input 
          type="checkbox" 
          id="isDone" 
          name="done" 
          checked={this.state.isDone} 
          onChange={this.handleChangeDone}
        />
        <label for="done">Done?</label>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default Note;
