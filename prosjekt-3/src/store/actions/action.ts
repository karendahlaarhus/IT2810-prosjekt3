import { FrontendActionTypes, SEND_QUERY, UPDATE_TYPE} from "../types/types";

export function sendQuery(searchQuery: string):FrontendActionTypes{
    return{
        type:SEND_QUERY,
        payload: searchQuery
    }
}

export function updateFilter(filterType: string):FrontendActionTypes{
    return{
        type: UPDATE_TYPE,
        payload: filterType
    }
}

