import React, {Component} from 'react'

import querystring from 'querystring'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import axios from 'axios'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {hashHistory, IndexRoute, Link, Route, Router} from 'react-router'
import {fetchProductDetails} from './../../actions/index'
import SearchItem from './searchItem';
import Header from './header';
import ItemHeader from './itemHeader';

//load page scss
 require('style-loader!css-loader!sass-loader!./../../styles/homeView.scss');

class Main extends Component {
     constructor(props){
        super(props)
        this.state ={
            product: [],
            productId: null
        }
    }

    componentWillMount(){
        this.getProduct();
    }
    componentDidMount()
    {
        this.props.fetchProductDetails(this.props);
        
    }


    getProduct(){
        axios.get(this.props.API_BASE+'api/product')
       .then((xhrResponse)=>{
           
            this.setState({product: xhrResponse.data})
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    render(){
        let cart =[]
        for (var i = 0; i < this.props.productDetails.length; i++) {

            cart[i] =   <div className="col-sm-2 col-xs-12" >
                            <div className="thumbnail">
                                <img src={this.props.productDetails[i].item_photo} alt="..." className="img-responsive images"/>
                                <div className="caption">
                                    <h3 className ="item_name">{this.props.productDetails[i].item_name}</h3>
                                    <p className="description">{this.props.productDetails[i].item_description}</p>
                                    
                                </div>
                            </div>
                        </div>   
                       
        }
        
        return (
            <div>
            <Header/>
            
            <SearchItem/>
            <ItemHeader/>
                {cart}
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        productDetails: state.productDetails

    };
};


var matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProductDetails
    }, dispatch);
};



export default
connect(mapStateToProps, matchDispatchToProps)(Main);
