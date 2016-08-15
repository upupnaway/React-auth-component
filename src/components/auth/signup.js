//similar to signin.
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Signup extends Component {
  handleFormSubmit(formProps){
    //call action creator to sign up the user!
    this.props.signupUser(formProps);
  }
  
  renderAlert(){
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  
  render(){
    const style ={
      float: 'right',
    };
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props
    return(
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 col-md-offset-3">
      <Card>
        <CardMedia>
          <img src="http://static1.squarespace.com/static/56395a91e4b0e877f7abcb75/56cfc1e64d088e8ab0517073/57093da722482e7442e80c11/1463444816465/community-group.jpg?format=1500w"/>
        </CardMedia>
      <CardText> 
      <form>
        <fieldset className="form-group">
          <TextField {...email}
            floatingLabelText="Email"
          />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <TextField {...password}
            floatingLabelText="Password"
            type="password"
          />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <TextField {...passwordConfirm}
            floatingLabelText="Confirm Password"
            type="password"
          />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}

        <FloatingActionButton onClick ={handleSubmit(this.handleFormSubmit.bind(this))} label="SIGN UP" primary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>

      </form>
      </CardText>
        </Card>
        </div>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};
  
  if (!formProps.email){
    errors.email = "Please enter an email";
  }
  
  if (!formProps.password){
    errors.password = 'Please enter a password';
  }
  
  if(!formProps.passwordConfirm){
    errors.passwordConfirm = "Please confirm password";
  }
  
  if(formProps.password !== formProps.passwordConfirm){
    errors.password = "Passwords must match";
  }
  
  return errors;
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
},mapStateToProps, actions)(Signup);