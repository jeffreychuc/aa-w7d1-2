import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', done: false};
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
    this.props.createTodo(this.state).then(
      () => this.setState({title: '', body: '', done: false})
    );
  }

  render() {
    console.log(this.props.errors, "render");
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
        <label>
          done:<br/>
          <input type="radio" name="done" value='true' onChange={this.handleChange("done")}/> true
          <input type="radio" name="done" value='false' onChange={this.handleChange("done")}/> false
        </label>
        <br/>
        <input type="submit"/>
        {this.props.errors}
      </form>
    );
  }
}

export default TodoForm;
