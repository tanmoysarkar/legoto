import {combineReducers} from 'redux';

import {productDetails} from './productDetails';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
    //This is name of the state which redux returns and send as props
    productDetails
});

export default allReducers