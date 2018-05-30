import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 import {connect} from 'react-redux'
//load page scss
 require('style-loader!css-loader!sass-loader!./../../styles/homeView.scss');

class SearchItem extends Component {
    render() {
        return (
            <div className = "search-legoto ">
                <div className="row">
                  <div className="col-xs-12 search-header">
                    <h2 className="search-header-text">Select An Item To Create Your Review </h2>

                  </div>
                  <div className="col-xs-12 search-hint">
                    <h4 className="search-header-hint">Hint: Which earphone do you use? </h4>

                  </div>
                  <div className="col-xs-12 search-box">
                    <span className="search-icon">
                    <input type="text" className="search-box-input" placeholder="Search items to Review"></input>
                    <button className="search-button">Find </button>
                    </span>

                  </div>
                 	
                </div>
            </div>
        );
    }
}
 
export default
connect()(SearchItem);
 