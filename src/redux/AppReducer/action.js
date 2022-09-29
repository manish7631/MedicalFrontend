import * as types from "./action.types"

import axios from "axios"
 

const getData = (params) => (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get(`https://health-care-medical.herokuapp.com/patient`, params).then((r) => dispatch({type:types.GET_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_DATA_FAILURE}))
    
}


const getSearchData = (params) => (dispatch) => {
    dispatch({type:types.GET_SEARCH_DATA_REQUEST})
    axios.get("http://localhost:8080/patient", params).then((r) => dispatch({type:types.GET_SEARCH_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_SEARCH_DATA_FAILURE}))
    
}

const getMedicineData = (params) => (dispatch) => {
    dispatch({type:types.GET_MEDICINE_DATA_REQUEST})
    axios.get("http://localhost:8080/medicine", params).then((r) => dispatch({type:types.GET_MEDICINE_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_MEDICINE_DATA_FAILURE}))
    
}


    



 

export {getData, getSearchData, getMedicineData}