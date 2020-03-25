import React from "react"
import PropTypes from "prop-types"
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import MainTop from '../components/MainTop/MainTop'
import MainBottom from '../components/MainBottom/MainBottom'

class Container extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='continer'>
          <Nav />
          <div className='wrapper'>
            <Sidebar />
            <div className='main'>
              <MainTop />
              <MainBottom />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Container
