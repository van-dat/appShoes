import actionType from "./actionType";
import * as apis from '../../api/index';


export const getBanner = () => async (dispatch) => {
    try {
        const response = await apis.apiBanner();
        console.log("a",response)
        if (response) {
            dispatch({
                    type: actionType.GET_API_BANNER,
                    data: response
            })
        }
    } catch (error) {
        console.log("ERROR ACTION", error)
    }
}
export const getProductSale = () => async (dispatch) => {
    try {
        const response = await apis.apiBanner();
        console.log("b",response)

        if (response) {
            dispatch({
                    type: actionType.GET_API_PRODUCT_SALE,
                    data: response
            })
        }
    } catch (error) {
        console.log("ERROR ACTION", error)
    }
}
