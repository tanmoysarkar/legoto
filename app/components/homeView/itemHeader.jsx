import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 import {connect} from 'react-redux'
//load page scss
 require('style-loader!css-loader!sass-loader!./../../styles/homeView.scss');

class ItemHeader extends Component {
    render() {
        return (
          <div className = "item-header ">
            <div className="row">
              <div className="col-xs-12 header-title">
                Trending Items
              </div>
            </div>
          </div>
        );
    }
}
 
export default
connect()(ItemHeader);
 