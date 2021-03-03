import { request } from "../http-helper";

export const simpleAction = (value) => dispatch => {
    console.log("valueeeee", value);
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: value
    })
}

export const getLists = () => {
    return(dispatch) => {
        return request("/list", "get", "").then((res) => {
            dispatch({ type: "GET_LIST", payload: res.data})
        }) 
    }
}