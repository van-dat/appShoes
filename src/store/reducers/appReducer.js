import actionType from "../actions/actionType"

const initialState = {
    dataBanner: [],
    dataProductSale : []
}

export const appReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case actionType.GET_API_BANNER:
            return {
                ...state,
                dataBanner: payload.data
            }

        case actionType.GET_API_PRODUCT_SALE:
            return {
                ...state,
                dataProductSale: payload.data
            }


        default:
            return state;
            break;
    }
}
