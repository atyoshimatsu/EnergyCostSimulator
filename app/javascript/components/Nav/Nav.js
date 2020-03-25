import React from "react"
import PropTypes from "prop-types"

class  ServiceTitle extends React.Component {
  render() {
    return(
      <div className="nav_title">enegy cost simulator</div>
    );
  }
}

class  Config extends React.Component {
  render() {
    return(
      <div className="nav_buttons_config">設定</div>
    );
  }
}

class  Logout extends React.Component {
  render() {
    return(
      <div className="nav_buttons_logout">logout</div>
    );
  }
}

class  Username extends React.Component {
  render() {
    return(
      <div className="nav_buttons_user-name">user name</div>
    );
  }
}

  class Nav extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='nav'>
          <ServiceTitle />
          <div className="nav_buttons">
            <Config />
            <Logout />
            <Username />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav
