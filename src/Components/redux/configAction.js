export const GET_DATA = "GET_DATA"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILED = "GET_DATA_FAILED"

export const getPost = (payload) => ({
    type: GET_DATA,
    payload
});

export const getDataSuccess = (payload) => ({
    type: GET_DATA_SUCCESS,
    payload
});

export const getDataFailed = () => ({
    type: GET_DATA_FAILED,
})