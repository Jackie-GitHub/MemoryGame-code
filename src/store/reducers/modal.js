import * as actionTypes from '../actions';

const initialState = {showModal:false};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SHOWMODAL:
            return {showModal:true}
        case actionTypes.HIDEMODAL:
            return {showModal:false};
    }
    return state;
};

export default reducer;