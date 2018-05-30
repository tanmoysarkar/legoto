import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 import {connect} from 'react-redux'
//load page scss
 require('style-loader!css-loader!sass-loader!./../../styles/homeView.scss');

class Header extends Component {
    render() {
        return (
          <div className = "header-legoto ">
            <div className="row">
              <div className="col-xs-12 header">
                <div className="col-xs-12 col-md-6">
                  <img className="logo-legoto"/>
                </div>
                <div className="col-xs-12 col-md-6">
                  <img className="legoto-close-button"/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default
connect()(Header);
 