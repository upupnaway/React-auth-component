import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Link, browserHistory } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {
  constructor(props) {
    super(props);

    //this constructor is here to bind component methods
    this.clickRedirect.bind(this);
  }

  clickRedirect() {
    browserHistory.push('/');
  }

  renderLinks(){
    if (this.props.authenticated){

      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      )
    } else {
      return (
        [<li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>]
      )
    }
  }

  render(){
    var pointerStyle = {
        cursor: 'pointer'
    };

    return (
      <AppBar
        title="CL +"
        onTitleTouchTap={this.clickRedirect}
        titleStyle={pointerStyle}
        iconElementRight={
          <IconButton><MoreVertIcon /></IconButton>
        }>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </AppBar>

    )
  }
}
function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header);
