import { FrontendActionTypes, SEND_QUERY} from "../types/types";

export function sendQuery(searchQuery: string):FrontendActionTypes{
    return{
        type:SEND_QUERY,
        payload: searchQuery
    }
}