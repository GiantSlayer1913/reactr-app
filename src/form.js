import React, { Component } from 'react';
// import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';

// Form Component
class Form extends React.Component {

  // FORM state
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    userNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  }

// Change method
  change = (event) => {
    this.props.onChange({ [event.target.name]: event.target.value })
    this.setState({
    [event.target.name]: event.target.value
    })
  }

// Validates form inputs are correct
  validate = () => {
    let isError = false;
      const errors = {
        firstNameError: "",
        lastNameError: "",
        userNameError: "",
        emailError: "",
        passwordError: ""
      }

      if (this.state.firstName.length === 0) {
        isError = true;
        errors.firstNameError = "Please enter your first name"
      }

      if (this.state.lastName.length === 0) {
        isError = true;
        errors.lastNameError = "Please enter your last name"
      }

      if (this.state.username.length < 6) {
        isError = true;
        errors.userNameError = "Username needs to be at least 6 charachters long"
      }

      if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email address"
      }


      this.setState({
        ...this.state,
        ...errors
      })

      return isError
  }

// Submit & Clear form method
  onSubmit = (event) => {
    event.preventDefault()
    // this.props.onSubmit(this.state)
    const err = this.validate()
    if (!err)
    this.setState({
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      username: "",
      usernameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    })

    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    })
  }

// Render Component
  render() {
    return (
      <form>
        <label>
        <input
          name="firstName"
          placeholder="First Name"
          // hintText="First Name"
          // floatingLabelText="First Name"
          value={this.state.firstName}
          onChange={event => this.change(event)}
          errorText={this.state.firstNameError}
          // floatingLabelFixed
          />
          <br />

        <input
          name="lastName"
          placeholder="Last Name"
          // hintText="Last Name"
          // floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={event => this.change(event)}
          errorText={this.state.lastNameError}
          // floatingLabelFixed
        />
        <br />

        <input
          name="username"
          placeholder="Username"
          // hintText="Username"
          // floatingLabelText="Username"
          value={this.state.username}
          onChange={event => this.change(event)}
          errorText={this.state.userNameError}
          // floatingLabelFixed
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          // hintText="Email"
          // floatingLabelText="Email"
          value={this.state.email}
          onChange={event => this.change(event)}
          errorText={this.state.emailError}
          // floatingLabelFixed
        />
        <br />

        <input
          name="password"
          placeholder="Password"
          // hintText="Password"
          // floatingLabelText="Password"
          value={this.state.password}
          onChange={event => this.change(event)}
          errorText={this.state.passwordError}
          type="password"
          // floatingLabelFixed
        />
        </label>
        <br />

      <button label="Submit" onClick={event => this.onSubmit(event)} type="primary">Submit</button>
    </form>
    )
  }
}

export default Form;
