import axios from "axios";

// api名を指定して、APIを呼び出す
export const callAPI = async (method, endpoint, params) => 
    axios({
        method: method,
        url: endpoint,
        data: endpoint === undefined ? null : params,
    }).then((response) => {
        return {
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        };
    
    }).catch((error) => {
        return error;
    }
);
