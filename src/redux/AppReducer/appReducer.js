import * as types from "./action.types"

const initialState = {
    data:[],
    dataSearch:[],
    medicine:[],
   isLoading:false,
    isError:false
}

const AppReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case types.GET_DATA_REQUEST:
                        return {...state, isLoading:true}
                        case types.GET_DATA_SUCCESS:
                            return {...state, isLoading:false, data:payload}
            
                            case types.GET_DATA_FAILURE:
                                return {...state, isLoading:false, isError:true}

                                case types.GET_SEARCH_DATA_REQUEST:
                                    return {...state, isLoading:true}
                                    case types.GET_SEARCH_DATA_SUCCESS:
                                        return {...state, isLoading:false, dataSearch:payload}
                        
                                        case types.GET_SEARCH_DATA_FAILURE:
                                            return {...state, isLoading:false, isError:true}

                                            case types.GET_MEDICINE_DATA_REQUEST:
                                                return {...state, isLoading:true}
                                                case types.GET_MEDICINE_DATA_SUCCESS:
                                                    return {...state, isLoading:false, medicine:payload}
                                    
                                                    case types.GET_MEDICINE_DATA_FAILURE:
                                                        return {...state, isLoading:false, isError:true}
        default:
            return state
    }
}

export default AppReducer