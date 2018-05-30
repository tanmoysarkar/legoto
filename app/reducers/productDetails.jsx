export var productDetails = (state = {}, action) => {

    switch (action.type) {
        case 'COMPLETE_PRODUCT_DETAILS_FETCH':
            return action.payload
            break;
        default:
            return state;
    }
};