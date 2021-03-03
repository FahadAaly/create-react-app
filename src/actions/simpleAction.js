export const simpleAction = (value) => dispatch => {
    console.log("valueeeee", value);
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: value
    })
}