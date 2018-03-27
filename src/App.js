import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url = 'https://hooks.slack.com/services/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';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {message: '',
    value: ''};
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.sendSlackMessage = this.sendSlackMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChangeMessage(event){
    console.log(event.target);

    this.setState({message: event.target.message});
    console.log(this.state.message);
  }

  sendSlackMessage() {

    let testMessage = this.state.message;

    //let testMessage = 'hello world';

    let message = JSON.stringify({text: testMessage });

    axios({
      method: 'post',
      url: url,
      data: message
    })

    .then((res)=>{
      console.log(res)
    })

    .catch((err)=>{
      console.log(err)
    })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.message);
    event.preventDefault();
  }

  handleChange(event) {
    console.log(event.target)
    this.setState({message: event.target.value});
  }



  render() {
    return (

      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.message} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>


        <button onClick={this.sendSlackMessage}> Test Message To send to Slack </button>
      </div>
    );
  }
}

export default App;
