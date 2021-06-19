import { LOADING, FAILURE, SUCCESS } from "./cms.types";

const initialState = {
    cmsPage: [],
    loading: false,
    error: false,
};

export const cmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case FAILURE:
            return {
                ...state,
                loading:false,
                error: true,
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                cmsPage: action.payload
            };
        default:
            return state;
    }
};
