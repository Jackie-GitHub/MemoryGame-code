import * as actionTypes from './actions';

const initialState = {wallPaintingNo:[0,0]};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.UPDATEPAINTINGNO){
        const newNumbers = [...state.wallPaintingNo];
        newNumbers[action.index] = action.number;
        return { wallPaintingNo:newNumbers };
    }
    return state;
};

export default reducer;