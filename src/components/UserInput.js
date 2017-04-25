import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }


  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleOnHomeTownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" name="username" onChange={(event) => this.handleOnUsernameChange(event)}/>
          <input type="text" name="hometown" onChange={(event) => this.handleOnHomeTownChange(event)}/>
          <input type="submit"/>

        </form>

      </div>
    );
  }
};

export default UserInput;
