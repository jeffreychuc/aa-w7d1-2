import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.receiveTodo = props.receiveTodo;
    this.state = {title: '', body: ''};
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }
  
  uniqueId() {
    return new Date().getTime();
  }

  handleSubmit(event)  {
    event.preventDefault();
    this.setState({id: this.uniqueId()});
    this.receiveTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Title: 
          <input type="text" value={this.state.title} onChange={this.handleChange("title")}/>
        </label>
        <label>
        Body: 
        <textarea name="body" id="" cols="30" rows="10" value={this.state.body} onChange={this.handleChange("body")}></textarea>
        </label>
        <input type="submit"/>
      </form>
    );
  }
}

export default TodoForm;
