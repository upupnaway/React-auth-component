import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import * as actions from '../../actions'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Signin extends Component {
  handleFormSubmit({email, password}){
    console.log(email,password);
    this.props.signinUser({ email, password});
    // need to do something to log user in.
    
  }
  
  renderAlert() {
    if (this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      )
    }
  }
  
  render(){
    const style = {
      float: 'right',
    };
    const { handleSubmit, fields: {email,password}}= this.props;
    
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 col-md-offset-3">
        <Card>
          <CardMedia>
            <img src="https://d31eqxppr3nlos.cloudfront.net/wp-content/uploads/2014/10/Couple-researching-furniture-in-an-empty-house.jpg"/>
          </CardMedia>
        <CardText> 
   
        <form>
          <fieldset  className="form-group">
            <TextField {...email}
              floatingLabelText="Email"
            />
          </fieldset>
          <fieldset  className="form-group">
            <TextField {...password}
              floatingLabelText="Password"
              type="password"
            />
          </fieldset>
          {this.renderAlert()}

        <FloatingActionButton onClick ={handleSubmit(this.handleFormSubmit.bind(this))} label="LOGIN" primary={true} style={style}>
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

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email','password']
},mapStateToProps, actions)(Signin);