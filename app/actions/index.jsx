import axios from 'axios'
import config from './../../config/config'


export var completeProductDetailsFetch = (sData) => {
    return {
        type: 'COMPLETE_PRODUCT_DETAILS_FETCH',
        payload: sData
    }
};


export var fetchProductDetails = (props) => {
  return (dispatch) => {
    axios.get(config.API_BASE+"api/product")
    .then((xhrResponse) => {
      let data = xhrResponse.data;
      dispatch(completeProductDetailsFetch(data));
      
    })
    .catch((error) => {
       console.log(error);
    });
  };
};

