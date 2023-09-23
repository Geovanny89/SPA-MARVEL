const initialState = {
    characters: [],
    detailCharacter: null,
};

function rootreducer(state = initialState, action) {
    switch (action.type) {
        
        case 'GET_CHARACTER':
          
            return {
                ...state,
                characters: action.payload
            }
        case 'COMIC_DETAIL':
            return {
                ...state,
                detailCharacter: action.payload,
            };
        case 'CLEAR':
            return {
                ...state,
                detailCharacter: action.payload
            }
        default:
            return state;
    }
}

export default rootreducer;

