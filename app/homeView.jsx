import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
global.myReact = React;
global.myReactDOM = ReactDom;
import Main from './components/homeView/main'
import store from './store/config'
//load general css
require('style-loader!css-loader!./styles/bootstrap.css');

//load page scss
 require('style-loader!css-loader!sass-loader!./styles/homeView.scss');

class Default extends React.Component{
    render()
    {
        return(
            <Provider store={store}>
                <Main {...this.props}/>
            </Provider>
        );
    }
}

global.Default = Default;
module.export = {
    Default: Default
}

